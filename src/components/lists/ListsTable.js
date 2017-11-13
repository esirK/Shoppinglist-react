import React from 'react';
import ListsTableRow from './ListsTableRow';

const ListsTable = ({lists}) => {
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
                {lists.map(list => <ListsTableRow key={list.id} list={list} />)}
            </tbody>
        </table>
    );
};

export default ListsTable;