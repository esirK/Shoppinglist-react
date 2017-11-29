import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ListsTable from './ListsTable';
import CreateListForm from './CreateListForm';
import {loadShoppingLists, createList} from '../../actions/listAction';
import toastr from 'toastr';

class Items extends React.Component{

    static updateShoppingList(event) {
        event.preventDefault();
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            lists: props.lists,
            newShoppingList: props.newShoppingList,
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
        let newShoppingList = this.state.newShoppingList;
        newShoppingList[field] = event.target.value;
        return this.setState({newShoppingList: newShoppingList});
    };

    createShoppingList = (event) => {
        event.preventDefault();
        this.props.createList(this.state.newShoppingList)
            .then(() => {
                toastr.clear();
                toastr.success(this.state.newShoppingList.title +' has been created.');
            }).catch(error => {
            toastr.clear();
            toastr.error(error);
        });
    };


    render(){
        return(
            <div className="mid-center">
                <h3>My shopping-lists</h3>
                <div id="shoppinglist">
                    <ListsTable lists={this.props.lists}/>
                    <br />
                    <CreateListForm
                        onSubmit={this.createShoppingList}
                        onChange={this.updateListState}
                        loading={this.state.loading}
                        list={this.state.newShoppingList} />
                </div>
            </div>

        );
    }
}


Items.propTypes = {
    lists: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    let newShoppingList = {
        title: ""
    };
    return {
        newShoppingList: newShoppingList,
        lists: state.lists,
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