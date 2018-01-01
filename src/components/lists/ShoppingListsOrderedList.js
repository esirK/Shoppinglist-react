import React, {PropTypes} from 'react';
import {Link} from "react-router";

const ShoppingListsOrderedList = ({lists}) => {
    return (
        <ul>
            {lists.map((list) =>
                <li id={list.id} key={list.id}>
                    <Link to={"/lists/"+list.id}>{list.title}</Link>
                </li>
            )}
        </ul>
    );
};



ShoppingListsOrderedList.propTypes = {
    lists: PropTypes.array.isRequired
};

export default ShoppingListsOrderedList;