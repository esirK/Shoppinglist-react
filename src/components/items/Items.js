import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/createItemActions';
import {connect} from 'react-redux';

class Items extends React.Component{

    constructor(props, context){
        super(props, context);

        this.newItem = {
            name: "",
            quantity: "",
            price: ""
        };

        this.state = {
            newItem : this.newItem
        };

        this.updateNewItemsName = this.updateNewItemsName.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateNewItemsPrice = this.updateNewItemsPrice.bind(this);
        this.updateNewItemsQuantity = this.updateNewItemsQuantity.bind(this);
        this.createShoppingListItem = this.createShoppingListItem.bind(this);
    }

    updateNewItemsName(event) {
        this.newItem.name =  event.target.value;
        this.updateState();
    }

    updateNewItemsPrice(event) {
        this.newItem.price =  event.target.value;
        this.updateState();
    }

    updateNewItemsQuantity(event) {
        this.newItem.quantity =  event.target.value;
        this.updateState();
    }

    updateState(){
        this.setState({newItem: this.newItem });
    }

    createShoppingListItem(event){
        event.preventDefault();
        this.props.createItem(this.state.newItem);
    }

    render(){
        return(
            <div className="mid-center">
                <div id="shoppingList_list" className="float-left">
                    <h3>
                        <Link to="/lists">
                            My shopping-lists
                        </Link>
                    </h3>
                    <Link to="\lists\:shoppingList.id ">Shoppinglist title</Link>
                </div>
                <form className="shoppingList-items-form" method="post">
                    <div id="shoppingListItems" className="float-right">

                        <h3 id="listItemHeader">current_shoppinglist_title</h3>
                        <table className="ui celled table" id="shoppingListItemsTable">
                            <tbody>
                                <tr>
                                    <th>
                                        Item name
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                    <th>
                                        Created on
                                    </th>
                                    <th>
                                        Modified on
                                    </th>
                                    <th>
                                        <a className="btn btn-default edit-btn">
                                            <i className="fa fa-pencil">.</i>
                                        </a>
                                        <Link to="/delete/item" className="btn btn-default delete-btn">
                                            <i className="fa fa-trash">.</i>
                                        </Link>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>

                <form method="post" onSubmit={this.createShoppingListItem}>
                    <div className="col-md-12 center-content">
                        <h4>Add item</h4>
                    </div>
                    <div className="row">

                        <div className="form-group col-md-5">
                            <input type="text" required aria-required="true" className="form-control"
                                   value={this.state.newItem.name} placeholder="Item"
                                   onChange={this.updateNewItemsName} />
                        </div>

                        <div className="form-group col-md-2">
                            <input type="text" required aria-required="true" className="form-control"
                                   value={this.state.newItem.price} placeholder="Price"
                                   onChange={this.updateNewItemsPrice} />
                        </div>

                        <div className="form-group col-md-2">
                            <input type="text" required aria-required="true" className="form-control"
                                   value={this.state.newItem.quantity} placeholder="Quantity"
                                   onChange={this.updateNewItemsQuantity} />
                        </div>

                        <div className="form-group col-md-3">
                            <button className="btn btn-primary">+ Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

Items.propTypes = {
    createItem: PropTypes.func.isRequired
};



function mapStateToProps(state, ownProps) {
    return {
        newItem: state.newItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createItem: bindActionCreators(itemActions.createItem, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);