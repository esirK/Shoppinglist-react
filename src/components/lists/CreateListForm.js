import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as listActions from '../../actions/listAction';
import {bindActionCreators} from 'redux';

class CreateListForm extends React.Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            newShoppingList: {
                title: ""
            }
        };

        this.createShoppingList = this.createShoppingList.bind(this);
        this.updateTitle = this.updateTitle.bind(this);

    }

    updateTitle(event) {
        this.setState({newShoppingList : {title : event.target.value }});
    }

    createShoppingList(event) {
        event.preventDefault();
        this.props.createList(this.state.newShoppingList);
    }

    render(){
        return(
            <form method="post" className="add-shoppinglist" onSubmit={this.createShoppingList}>
                <h4>Create a new shoppinglist</h4>
                <div className="form-group col-md-10">
                    <input type="text"
                           className="form-control"
                           value={this.state.newShoppingList.title}
                           onChange={this.updateTitle}
                           aria-required="true"
                           required placeholder="Title" />
                </div>
                <div className="form-group col-md-2">
                    <button className="btn btn-primary col-md-10">
                        + Add
                    </button>
                </div>
            </form>
        );
    }
}


CreateListForm.propTypes = {
    createList: PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        shoppinglist: state.newShoppingList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createList : bindActionCreators(listActions.createList, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateListForm);