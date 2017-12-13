import React, {PropTypes} from 'react';
import TextInput from '../helperComponents/TextInput';

const ItemsTableRow = ({item, index, deleteHandler, editHandler, loading}) => {

    const itemIsBeingEdited = (editHandler.itemToBeUpdated.id === item.id.toString());

    return (
        <tr id={item.id}>
            <td>{index+1}</td>
            <td className="item-name">
                {
                    (itemIsBeingEdited &&
                        <TextInput
                            disabled={loading === true}
                            value={editHandler.itemToBeUpdated.data.name}
                            name="name"
                            onChange={editHandler.onchange}
                            onBlur={editHandler.onblur}
                            placeholder="New Title"/>) ||

                    ( !itemIsBeingEdited &&
                        <a> {item.name} </a>)
                }
            </td>
            <td className="item-price">
                {
                    (itemIsBeingEdited &&
                        <TextInput
                            type="number"
                            step="0.1"
                            minValue="0.1"
                            disabled={loading === true}
                            value={editHandler.itemToBeUpdated.data.price}
                            name="price"
                            onChange={editHandler.onchange}
                            onBlur={editHandler.onblur}
                            placeholder="Price"/>) ||

                    ( !itemIsBeingEdited &&
                        <a> {item.price} </a>)
                }
            </td>
            <td className="item-quantity">
                {
                    (itemIsBeingEdited &&
                        <TextInput
                            type="number"
                            minValue="1"
                            step="1"
                            disabled={loading === true}
                            name="quantity"
                            value={editHandler.itemToBeUpdated.data.quantity}
                            onChange={editHandler.onchange}
                            onBlur={editHandler.onblur}
                            placeholder="Quantity"/>) ||

                    ( !itemIsBeingEdited &&
                        <a> {item.quantity} </a>)
                }
            </td>
            {
                (itemIsBeingEdited &&
                    <td>
                        <input type="submit"
                               value={loading ? "saving...": "save"}
                            className="btn btn-success edit-btn" />
                    </td>
                ) ||
                (
                    !itemIsBeingEdited &&
                    <td>
                        <button
                            onClick={editHandler.initialize}
                            className="btn btn-default edit-btn">
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button
                            onClick={deleteHandler}
                            className="btn btn-default delete-btn">
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                )
            }
        </tr>
    );
};



ItemsTableRow.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    editHandler: PropTypes.object.isRequired
};

export default ItemsTableRow;