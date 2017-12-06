import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ItemsTableRow = ({item, index, deleteHandler, editHandler, loading}) => {
    return (
        <tr id={item.id}>
            <td>{index+1}</td>
            <td className="item-name">
                <a> {item.name} </a>
            </td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
                <btn
                    className="btn btn-default edit-btn">
                    <i className="fa fa-pencil"></i>
                </btn>
                <btn
                    onClick={deleteHandler}
                    className="btn btn-default delete-btn">
                    <i className="fa fa-trash"></i>
                </btn>
            </td>
        </tr>
    );
};



ItemsTableRow.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    deleteHandler: PropTypes.func.isRequired
    // editHandler: PropTypes.object.isRequired,
};

export default ItemsTableRow;