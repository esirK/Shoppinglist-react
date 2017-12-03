import React, {PropTypes} from 'react';
import ListsTableRow from './ListsTableRow';

const ListsTable = ({lists, editHandler, deleteHandler}) => {
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
    deleteHandler: PropTypes.func.isRequired
};

export default ListsTable;