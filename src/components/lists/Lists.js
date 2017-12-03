import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ListsTable from './ListsTable';
import CreateListForm from './CreateListForm';
import {loadShoppingLists, createList, initializeListEditor} from '../../actions/listAction';
import toastr from 'toastr';
import JQuery from 'jquery';

class Lists extends React.Component{

    static updateShoppingList(event) {
        event.preventDefault();
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            updateList: props.updateList,
            existingShoppingList: props.existingShoppingList,
            newShoppingList: props.newShoppingList,
            loading: props.loading
        };

        this.editList = {
            initialize: (event) => {
                let oldShoppingList = {};
                const listsRow = JQuery(event.target).closest('tr');
                oldShoppingList.title = JQuery(listsRow).find('.list-title').text();
                oldShoppingList.id = JQuery(listsRow).attr('id');
                props.initializeListEditor(oldShoppingList);
            },

            onchange: (event) => {
                let oldShoppingList = this.state.oldShoppingList;
                oldShoppingList.title = JQuery(event.target).val();
                this.setState({oldShoppingList: oldShoppingList});
            },
            listToUpdate: this.state.updateList
        };
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
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

        if(nextProps.updateList !== this.state.updateList){
            this.setState({updateList: nextProps.updateList});
            this.editList.listToUpdate = nextProps.updateList;
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

    deleteList = (event) => {

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
                    <form method="post" onSubmit={this.updateShoppingList}>
                        <ListsTable
                            editHandler={this.editList}
                            deleteHandler={this.deleteList}
                            lists={this.state.existingShoppingList}/>
                    </form>
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


Lists.propTypes = {
    existingShoppingList: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        newShoppingList: state.lists.newShoppingList,
        updateList: state.editList,
        existingShoppingList: state.lists.existingShoppingList,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadShoppingLists: bindActionCreators(loadShoppingLists, dispatch),
        createList : bindActionCreators(createList, dispatch),
        initializeListEditor : bindActionCreators(initializeListEditor, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Lists);