import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ListsTable from './ListsTable';
import CreateListForm from './CreateListForm';
import {loadShoppingLists} from '../../actions/listAction';

class Lists extends React.Component{

    static updateShoppingList(event) {
        event.preventDefault();
    }

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return(
            <div className="mid-center">
                <h3>My shopping-lists</h3>
                <div id="shoppinglist">
                    <form method="post" onSubmit={this.updateShoppingList}>
                        <ListsTable lists={this.props.lists}/>
                    </form>
                    <br />
                    <CreateListForm/>
                </div>
            </div>

        );
    }
}


Lists.propTypes = {
    lists: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps(dispatch) {
    // Load lists belonging to current user
    dispatch(loadShoppingLists());
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps) (Lists);