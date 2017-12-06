import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemsTable from './ItemsTable';
import {showNotification} from '../helpers/sharedFunctions';
import CreateItemForm from './CreateItemForm';
import * as itemActions from '../../actions/itemActions';
import JQuery from 'jquery';

class Items extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            // updateList: props.updateList,
            items: props.items,
            newItem: props.newItem,
            loading: props.loading
        };

        // this.editItem = {
        //     initialize: (event) => {
        //         let oldItem = {};
        //         const listsRow = JQuery(event.target).closest('tr');
        //         oldItem.title = JQuery(listsRow).find('.list-title').text();
        //         oldItem.id = JQuery(listsRow).attr('id');
        //         props.initializeListEditor(oldItem);
        //     },
        //     onchange: (event) => {
        //         let oldItem = this.state.updateList;
        //         oldItem.title = event.target.value;
        //         this.setState({updateList: oldItem});
        //     },
        //     onblur: (event) => {
        //         const updatedList = Object.assign({}, this.state.updateList);
        //         props.updateItem(updatedList).then((list) => {
        //             showNotification('success', 'Update Successful');
        //         }).catch((error) => {
        //             showNotification('error', error);
        //         });
        //     },
        //     listToUpdate: this.state.updateList
        // };
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.loading !== this.state.loading){
            this.setState({
                loading: nextProps.loading
            });
        }

        if(nextProps.items !== this.state.items){
            this.setState({
                items: nextProps.items
            });
        }
    //
    //     if(nextProps.updateList !== this.state.updateList){
    //         this.setState({updateList: nextProps.updateList});
    //         this.editList.listToUpdate = nextProps.updateList;
    //     }
    }

    componentDidMount(){
        this.props.loadItems(this.props.currentShoppingList);
    }

    updateNewItemState = (event) => {
        const field = event.target.name;
        let newItem = this.state.newItem;
        newItem[field] = event.target.value;
        return this.setState({newItem: newItem});
    };
    //
    // deleteList = (event) => {
    //     const listsRow = JQuery(event.target).closest('tr');
    //     const shoppingList = JQuery(listsRow).find('.list-title').text();
    //     const listsId = JQuery(event.target).closest('tr').attr('id');
    //     this.props.deleteItem(listsId)
    //         .then(() => {
    //             showNotification('success', '`'+shoppingList+'` has been deleted.');
    //         }).catch(error => {
    //         showNotification('error', error);
    //     });
    // };
    //
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
        return(
            <div className="mid-center">
                <h3>My Shoppinglist Items</h3>
                <div id="shoppinglist">
                    <ItemsTable
                        // editHandler={this.editList}
                        // deleteHandler={this.deleteList}
                        loading={this.state.loading}
                        items={this.state.items}/>
                    <br />
                    <CreateItemForm
                        onSubmit={this.createItem}
                        onChange={this.updateNewItemState}
                        loading={this.state.loading}
                        item={this.state.newItem} />
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
        // updateList: state.editList,
        items: state.items,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // deleteItem: bindActionCreators(itemActions.deleteItem, dispatch),
        // updateItem: bindActionCreators(itemActions.updateItem, dispatch),
        loadItems: bindActionCreators(itemActions.loadItems, dispatch),
        createItem : bindActionCreators(itemActions.createItem, dispatch),
        // initializeListEditor : bindActionCreators(itemActions.initializeListEditor, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Items);