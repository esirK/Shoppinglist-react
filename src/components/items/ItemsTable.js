import React, {PropTypes} from 'react';
import ItemsTableRow from './ItemsTableRow';

const ItemsTable = ({items, editHandler, deleteHandler, loading}) => {
    return (
        <div>
        {
            (items.length > 0 &&
            <table className="compact ui celled table col-md-12" id="itemsTable">
                <thead>
                <tr>
                    <th>NO.</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) =>
                    <ItemsTableRow
                        key={item.id}
                        item={item}
                        deleteHandler={deleteHandler}
                        editHandler={editHandler}
                        index={index}
                        loading={loading}
                    />)}
                </tbody>
            </table>) ||

            <h5>
                You do not have any items in this shoppinglist. Create one
            </h5>
        }
        </div>
    );
};

ItemsTable.propTypes = {
    items: PropTypes.array.isRequired,
    editHandler: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default ItemsTable;