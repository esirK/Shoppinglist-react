import {delay, generateRandomInt, userIsAuthenticated} from './helper'; // setTimeout delay to simulate the delay of an AJAX call to a server.

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


const authenticatedUser = userIsAuthenticated();

class ItemsApi {

    static createItem(listId, item) {
        item = Object.assign({}, item); // create a copy of object passed in to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {

            if (authenticatedUser === false) {
                reject("Unauthorised Access");
            }

            if (item.name === "") {
                reject("item name must be provided");
                return;
            }

            if (items.findIndex(a => a.name.toUpperCase() === item.name.toUpperCase()) !== -1) {
                reject(`\`${item.name}\` already exists`);
                return;
            }

            const newItem = {
                id: generateRandomInt(),
                name: item.name,
                shoppinglist_id: parseInt(listId),
                price: item.price,
                quantity: item.quantity
            };

            items.push(newItem);
            resolve(item);
        });
    }

    static updateItem(item) {
        item = Object.assign({}, item); // create a copy of object passed in to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            const itemData = Object.assign({}, item.data);

            if (authenticatedUser === false) {
                reject("Unauthorised Access");
            }

            if (itemData.name === "") {
                reject("item name must be provided");
                return;
            }

            if (itemData.quantity === "" || itemData.price === "") {
                reject("item price and quantity must be provided");
                return;
            }

            const itemIndex = items.findIndex(a => parseInt(a.id) === parseInt(item.id));
            if (itemIndex === -1) {
                reject('Item does not exists');
                return;
            }

            items[itemIndex].name =  itemData.name;
            items[itemIndex].price =  parseFloat(itemData.price);
            items[itemIndex].quantity =  parseFloat(itemData.quantity);

            resolve(item);
        });
    }

    static listItems(listId, itemId = null){

        return new Promise((resolve, reject) => {

            if (authenticatedUser === false) {
                reject("Unauthorised Access");
            }

            let itemsInCurrentList = [];
            let validItems;

            items.map((item) => {
                if (item.shoppinglist_id === parseInt(listId)) {
                    itemsInCurrentList.push(item);
                }
            });

            validItems = itemsInCurrentList;

            if (itemId !== null) {
                validItems = [];
                items.map((item) => {
                    if (item.id() === itemId) {
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

    static deleteItem(itemId){

        return new Promise((resolve, reject) => {

            if (authenticatedUser === false) {
                reject("Unauthorised Access");
            }

            const itemIndex = items.findIndex(a => a.id === parseInt(itemId));
            if (itemIndex !== -1) {
                items.splice(itemIndex, 1);
                resolve('Item has been deleted successfully');
                return;
            }
        });

    }
}

export default ItemsApi;