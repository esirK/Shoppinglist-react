import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as listActions from '../../actions/createListAction';
import {bindActionCreators} from 'redux';

class Lists extends React.Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            new_shoppinglist: {
                title: ""
            }
        };

        this.updateTitle = this.updateTitle.bind(this);
        // this.updateShoppingList = this.updateShoppingList.bind(this);
        this.createShoppingList = this.createShoppingList.bind(this);

    }

    updateTitle(event) {
        this.setState({new_shoppinglist : {title : event.target.value }});
    }

    // updateShoppingList(event) {
    //     event.preventDefault();
    // }

    createShoppingList(event) {
        event.preventDefault();
        this.props.createList(this.state.new_shoppinglist);
    }

    render(){
        return(
            <div className="mid-center">
                <h3>My shopping-lists</h3>
                <div id="shoppinglist">
                    <form method="post" onSubmit={this.updateShoppingList}>
                        <table className="ui celled table col-md-12" id="shoppinglistTable">
                            <tbody>
                                <tr>
                                    <th>NO.</th>
                                    <th>Title</th>
                                    <th>Created On</th>
                                    <th>Updated On</th>
                                    <th>Actions</th>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <br />
                    <form method="post" className="add-shoppinglist" onSubmit={this.createShoppingList}>
                        <h4>Create a new shoppinglist</h4>
                        <div className="form-group col-md-10">
                            <input type="text" className="form-control" value={this.state.new_shoppinglist.title}
                                   onChange={this.updateTitle} aria-required="true" required placeholder="Title" />
                        </div>
                        <div className="form-group col-md-2">
                            <button className="btn btn-primary col-md-10">+ Add</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}


Lists.propTypes = {
    createList: PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        shoppinglist: state.new_shoppinglist
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createList : bindActionCreators(listActions.createList, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Lists);