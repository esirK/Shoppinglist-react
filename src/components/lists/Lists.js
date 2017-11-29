import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

    componentDidMount(){
        // Load lists belonging to current user
        setTimeout(() =>{
            this.props.loadShoppingLists();
            }, 1000);
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
    return {
        loadShoppingLists: bindActionCreators(loadShoppingLists, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Lists);