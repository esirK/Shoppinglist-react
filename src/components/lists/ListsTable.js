import React, {PropTypes} from 'react';
import ListsTableRow from './ListsTableRow';

const ListsTable = ({lists, editHandler, deleteHandler, loading}) => {
    return (
        <table className="ui celled table col-md-12" id="shoppinglistTable">
            <thead>
            <tr>
                <th>NO.</th>
                <th>Title</th>
                <th>Created On</th>
                <th>Updated On</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {lists.map((list, index) =>
                    <ListsTableRow
                        key={list.id}
                        list={list}
                        loading={loading}
                        index={index}
                        deleteHandler={deleteHandler}
                        editHandler={editHandler}
                    />)}
            </tbody>
        </table>
    );
};

ListsTable.propTypes = {
    lists: PropTypes.array.isRequired,
    editHandler: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default ListsTable;