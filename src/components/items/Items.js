import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemsTable from './ItemsTable';
import {destroyDataTable, initializeDataTable, showNotification} from '../helperComponents/sharedFunctions';
import CreateItemForm from './CreateItemForm';
import * as itemActions from '../../actions/itemActions';
import JQuery from 'jquery';
import {confirmAlert} from "react-confirm-alert";
import LogoutButton from "../helperComponents/LogoutButton";
import LoadingAnimation from "../helperComponents/LoadingAnimation";
import * as listActions from "../../actions/listActions";
import ShoppingListsOrderedList from "../lists/ShoppingListsOrderedList";
import {Link, Redirect} from 'react-router'

export class Items extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            currentShoppingList: props.currentShoppingList,
            itemToBeUpdated: props.itemToBeUpdated,
            existingShoppingList: props.existingShoppingList,
            items: props.items,
            newItem: props.newItem,
            loading: props.loading
        };

        this.editItem = {
            initialize: (event) => {
                let oldItem = {data:{}, id: ""};
                const listsRow = JQuery(event.target).closest('tr');
                oldItem.data.name = JQuery(listsRow).find('.item-name').text();
                oldItem.data.price = parseFloat(JQuery(listsRow).find('.item-price').text());
                oldItem.data.quantity = parseFloat(JQuery(listsRow).find('.item-quantity').text());
                oldItem.id = JQuery(listsRow).attr('id');
                props.initializeItemEditor(oldItem);
            },
            onchange: (event) => {
                let oldItem = this.state.itemToBeUpdated;
                const field = event.target.name;
                oldItem.data[field] = event.target.value;
                this.setState({updateList: oldItem});
            },
            itemToBeUpdated: this.state.itemToBeUpdated
        };
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.params.id !== this.props.params.id){
            this.setState({
                currentShoppingList: nextProps.params.id
            });
            this.componentDidMount();
        }

        if(nextProps.loading !== this.state.loading){
            this.setState({
                loading: nextProps.loading
            });
        }

        if(nextProps.existingShoppingList !== this.state.existingShoppingList){
            this.setState({
                existingShoppingList: nextProps.existingShoppingList
            });
        }

        if(nextProps.items !== this.state.items){
            this.setState({
                items: nextProps.items
            });
            destroyDataTable('#itemsTable');
        }

        if(nextProps.itemToBeUpdated !== this.state.itemToBeUpdated){
            this.setState({itemToBeUpdated: nextProps.itemToBeUpdated});
            this.editItem.itemToBeUpdated = nextProps.itemToBeUpdated;
        }
    }

    componentDidMount(){
        console.log(this.props.params.id);
        this.props.loadShoppingLists();
        this.props.loadItems(this.state.currentShoppingList)
            .then(() => {
                initializeDataTable('#itemsTable');
            });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.items !== this.state.items) {
            initializeDataTable('#itemsTable');
        }
    }

    updateNewItemState = (event) => {
        const field = event.target.name;
        let newItem = this.state.newItem;
        newItem[field] = event.target.value;
        return this.setState({newItem: newItem});
    };

    deleteItem = (event) => {
        const itemRow = JQuery(event.target).closest('tr');
        const item = JQuery(itemRow).find('.item-name').text();
        const itemId = JQuery(event.target).closest('tr').attr('id');
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure to delete `'+item+'`?',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => {
                this.props.deleteItem(itemId)
                    .then(() => {
                        showNotification('success', '`'+item+'` has been deleted.');
                    }).catch(error => {
                    showNotification('error', error);
                });
            },
            onCancel: () => {}
        })
    };

    updateItem = (event) => {
        event.preventDefault();
        const updatedItem = Object.assign({}, this.state.itemToBeUpdated);
        this.props.updateItem(updatedItem).then((item) => {
            showNotification('success', 'Update Successful');
        }).catch((error) => {
            showNotification('error', error);
        });
    };

    createItem = (event) => {
        event.preventDefault();
        this.props.createItem(this.props.currentShoppingList, this.state.newItem)
            .then(() => {
                showNotification('success', this.state.newItem.name +' has been created.');
            }).catch(error => {
            showNotification('error', error);
        });
    };

    render(){
        console.log("render "+Math.random());
        return(
            <div>
                <div className="extreme-left">
                    <h3>
                        <Link to="/">My Shoppinglists</Link>
                    </h3>

                    <ShoppingListsOrderedList lists={this.state.existingShoppingList} />

                </div>
                <div className="mid-center">
                    <h3>Items</h3>
                    <LogoutButton />
                    {this.state.loading && <LoadingAnimation />}
                    <div id="shoppinglist">
                        <form onSubmit={this.updateItem}>
                            <ItemsTable
                                editHandler={this.editItem}
                                deleteHandler={this.deleteItem}
                                loading={this.state.loading}
                                items={this.state.items}/>
                        </form>
                        <br />
                        <CreateItemForm
                            onSubmit={this.createItem}
                            onChange={this.updateNewItemState}
                            loading={this.state.loading}
                            item={this.state.newItem} />
                    </div>
                </div>
            </div>

        );
    }
}


Items.propTypes = {
    items: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        currentShoppingList: ownProps.params.id,
        newItem: {name:"", price: "", quantity: ""},
        itemToBeUpdated: state.edit,
        items: state.items,
        existingShoppingList: state.lists.existingShoppingList,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteItem: bindActionCreators(itemActions.deleteItem, dispatch),
        updateItem: bindActionCreators(itemActions.updateItem, dispatch),
        loadItems: bindActionCreators(itemActions.loadItems, dispatch),
        loadShoppingLists: bindActionCreators(listActions.loadShoppingLists, dispatch),
        createItem : bindActionCreators(itemActions.createItem, dispatch),
        initializeItemEditor : bindActionCreators(itemActions.initializeItemEditor, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Items);