import React, {PropTypes} from 'react';
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



ListsTableRow.propTypes = {
    list: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default ListsTableRow;