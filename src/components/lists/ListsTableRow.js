import React from 'react';
import {Link} from 'react-router';

const ListsTableRow = ({list}) => {
    return (
        <tr>
            <td>NO.</td>
            <td>
                <Link to={"/lists/"+ list.id}> {list.title} </Link>
            </td>
            <td>{list.created_on}</td>
            <td>{list.updated_on}</td>
            <td>Actions</td>
        </tr>
    );
};

export default ListsTableRow;