import {delay, generateRandomInt}  from '../helper'; // setTimeout delay to simulate the delay of an AJAX call to a server.

// This file mocks the shoppinglist web API
const items = [
    {
        id: 579087,
        name: "meat",
        shoppinglist_id: 1,
        price: 20.75,
        quantity: 1
    },
    {
        id: 456787,
        name: "barbecue wraps",
        shoppinglist_id: 1,
        price: 75.20,
        quantity: 1
    },
    {
        id: 3245675,
        name: "Vinegar",
        shoppinglist_id: 3,
        price: 25.6,
        quantity: 1
    },
    {
        id: 345678,
        name: "Tomato ketchup",
        shoppinglist_id: 4,
        price: 50,
        quantity: 10
    }
];



class ItemsApi {

    static createItem(item) {
        item = Object.assign({}, item); // create a copy of object passed in to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // todo: Simulate server-side form data validation
                // todo: Simulating creating an item

                resolve(item);

            }, delay);
        });
    }

    static listItems(list_id, item_id = null){

        return new Promise((resolve, reject) => {
            let itemsInCurrentList = [];
            let validItems;

            items.map((item) => {
                if (item.shoppinglist_id === list_id) {
                    itemsInCurrentList.push(item);
                }
            });

            validItems = itemsInCurrentList;

            if (item_id !== null) {
                validItems = [];
                items.map((item) => {
                    if (item.id() === item_id) {
                        validItems.push(item);
                    }
                });

                if (validItems.length === 0) {
                    reject("Requested shoppinglist item was not found");
                }
            }

            resolve(validItems);
        });

    }
}

export default ItemsApi;