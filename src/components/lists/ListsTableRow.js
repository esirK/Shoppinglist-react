import React, {PropTypes} from 'react';

const ListsTableRow = ({list}) => {
    return (
        <tr>
            <td>NO.</td>
            <td>{list.title}</td>
            <td>{list.created_on}</td>
            <td>{list.updated_on}</td>
            <td>Actions</td>
        </tr>
    );
};

export default ListsTableRow;