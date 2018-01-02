import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import TextInput from '../helperComponents/TextInput';

const ListsTableRow = ({list, index, deleteHandler, editHandler, loading}) => {
    return (
        <tr id={list.id}>
            <td>{index+1}</td>
            <td className="list-title">

                {
                    editHandler.listToUpdate.id === list.id.toString() &&
                    <TextInput
                        disabled={loading === true}
                        value={editHandler.listToUpdate.data}
                        onChange={editHandler.onchange}
                        onBlur={editHandler.onblur}
                        placeholder="New Title"/>
                }

                {
                    editHandler.listToUpdate.id !== list.id.toString() &&
                    <Link to={"/lists/"+ list.id}> {list.title} </Link>
                }
            </td>
            <td>{list.created_on}</td>
            <td>{list.modified_on}</td>
            <td>
                <button
                    onClick={
                        loading === false &&
                        editHandler.listToUpdate.id !== list.id.toString() &&
                        editHandler.initialize}
                    disabled={loading === true || editHandler.listToUpdate.id === list.id.toString()}
                    className="btn btn-xs btn-default edit-btn">
                    <i className="fa fa-pencil"></i>
                </button>
                <button
                    disabled={loading === true}
                    onClick={loading === false && deleteHandler}
                    className="btn btn-xs btn-default delete-btn">
                    <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
    );
};



ListsTableRow.propTypes = {
    loading: PropTypes.bool.isRequired,
    list: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    editHandler: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default ListsTableRow;