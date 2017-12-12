import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemsTable from './ItemsTable';
import CreateItemForm from './CreateItemForm';
import {loadShoppingLists, createList} from '../../actions/listAction';
import toastr from 'toastr';

class Items extends React.Component{

    static updateShoppingList(event) {
        event.preventDefault();
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            listId: props.listId,
            items: props.items,
            newItem: props.newItem,
            loading: props.loading
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.loading !== this.state.loading){
            this.setState({
                loading: nextProps.loading
            });
        }
    }

    componentDidMount(){
        this.props.loadShoppingLists();
    }

    updateListState = (event) => {
        const field = event.target.name;
        let newItem = this.state.newItem;
        newItem[field] = event.target.value;
        return this.setState({newItem: newItem});
    };

    createShoppingList = (event) => {
        event.preventDefault();
        this.props.createList(this.state.newItem)
            .then(() => {
                toastr.clear();
                toastr.success(this.state.newItem.name +' has been created.');
            }).catch(error => {
            toastr.clear();
            toastr.error(error);
        });
    };


    render(){
        return(
            <div className="mid-center">
                <h3>My shopping-items</h3>
                <div id="shoppinglist">
                    <ItemsTable items={this.props.items}/>
                    <br />
                    <CreateItemForm
                        onSubmit={this.createShoppingList}
                        onChange={this.updateListState}
                        loading={this.state.loading}
                        item={this.state.newItem} />
                </div>
            </div>

        );
    }
}

//
// Items.propTypes = {
//     items: PropTypes.array.isRequired
// };


function mapStateToProps(state, ownProps) {
    let newItem = {
        name: ""
    };
    return {
        listId: ownProps.params.id,
        newItem: newItem,
        items: state.items,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadShoppingLists: bindActionCreators(loadShoppingLists, dispatch),
        createList : bindActionCreators(createList, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Items);