import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import TextInput from '../helpers/TextInput';

const ListsTableRow = ({list, index, deleteHandler, editHandler}) => {
    return (
        <tr id={list.id}>
            <td>{index+1}</td>
            <td className="list-title">
                <TextInput
                    value={editHandler.title}
                    onChange={editHandler.onchange}
                    placeholder="New Title"/>

                <Link to={"/lists/"+ list.id}> {list.title} </Link>
            </td>
            <td>{list.created_on}</td>
            <td>{list.updated_on}</td>
            <td>
                <div onClick={editHandler.initialize} className="btn btn-default edit-btn">
                    <i className="fa fa-pencil"></i>
                </div>
                <div onClick={deleteHandler} className="btn btn-default delete-btn">
                    <i className="fa fa-trash"></i>
                </div>
            </td>
        </tr>
    );
};



ListsTableRow.propTypes = {
    list: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    editHandler: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default ListsTableRow;