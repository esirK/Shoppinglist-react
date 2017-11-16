import React from 'react';
import {Link} from 'react-router';

const ListsTableRow = ({list, index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>
                <Link to={"/lists/"+ list.id}> {list.title} </Link>
            </td>
            <td>{list.created_on}</td>
            <td>{list.updated_on}</td>
            <td>
                <span className="fa fa-edit"></span>
                <span className="fa fa-trash-o"></span>
            </td>
        </tr>
    );
};

export default ListsTableRow;