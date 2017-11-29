import React, {PropTypes} from 'react';
import ItemsTableRow from './ItemsTableRow';

const ItemsTable = ({items}) => {
    return (
        <table className="ui celled table col-md-12" id="shoppingitemTable">
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
                {items.map((item, index) => <ItemsTableRow key={item.id} item={item} index={index} />)}
            </tbody>
        </table>
    );
};

ItemsTable.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemsTable;