import {delay, userIsAuthenticated, generateRandomInt}  from './helper'; // setTimeout delay to simulate the delay of an AJAX call to a server.

let lists = [
    {
        id: 1,
        title: "back to school",
        created_on: "2017-10-12 10:40:32",
        modified_on: "",
        user_id: 4567
    },
    {
        id: 2,
        title: "Weekend party",
        created_on: "2017-10-12 10:40:32",
        modified_on: "",
        user_id: 4567
    },
    {
        id: 3,
        title: "Kisumu tour",
        created_on: "2017-10-12 10:40:32",
        modified_on: "",
        user_id: 123456
    },
    {
        id: 4,
        title: "Picnic",
        created_on: "2017-10-12 10:40:32",
        modified_on: "",
        user_id: 123456
    }
];

const authenticatedUser = userIsAuthenticated();
const dt = new Date();
const utcDate = dt.toUTCString();

class MockListsApi {

    static createList(list) {
        list = Object.assign({}, list); // create a copy of object passed in to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {

                if (authenticatedUser === false) {
                    reject("Unauthorised Access");
                }

                if (list.title === "") {
                    reject("shoppinglist title must be provided");
                    return;
                }

                if (lists.findIndex(a => a.title.toUpperCase() === list.title.toUpperCase() && authenticatedUser === 123456) !== -1) {
                    reject(`\`${list.title}\` already exists`);
                    return;
                }

                const newList = {
                    id: generateRandomInt(),
                    title: list.title,
                    created_on: utcDate,
                    modified_on: "",
                    user_id: 123456
                };
                lists.push(newList);
                resolve();
        });
    }

    static getLists(list_id = null) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // Simulate fetching all existingShoppingList belonging to user 123456
                let currentUsersLists = [];
                let validLists;

                lists.map((list) => {
                    if(list.user_id === authenticatedUser){
                        currentUsersLists.push(list);
                    }
                });


                validLists = currentUsersLists;

                //Simulating retrieving a specific list
                if(list_id !== null) {
                    validLists = [];

                    currentUsersLists.map((list) => {
                        if(list.id === list_id){
                            validLists.push(list);
                        }
                    });

                    if(validLists.length === 0){
                        reject("Requested shoppinglist was not found");
                    }
                }

                resolve(validLists);
            }, delay);
        });
    }


    static updateList(newListDetails) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (authenticatedUser === false) {
                    reject("Unauthorised Access");
                }

                if (newListDetails.data === "") {
                    reject("shoppinglist title must be provided");
                    return;
                }

                if (lists.findIndex(a => a.title.toUpperCase() === newListDetails.data.toUpperCase() &&
                        a.user_id === authenticatedUser) !== -1) {
                    reject("Shoppinglist with similar tityle already exists");
                    return;
                }

                let updatedList = {};
                lists.map((list) => {

                    if(list.id.toString() === newListDetails.id.toString()){
                        list.title = newListDetails.data;
                        list.modified_on = utcDate;
                        updatedList = list;
                    }
                });

                resolve(updatedList);
            }, delay);
        });
    }

    static deleteList(listId) {
        listId = parseInt(listId);
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (authenticatedUser === false) {
                    reject("Unauthorised Access");
                }

                const indexOfList = lists.findIndex(a => a.id === listId && a.user_id === authenticatedUser);
                if (indexOfList !== -1) {
                    lists.splice(indexOfList, 1);
                    resolve("Shoppinglist has been deleted successfully", 200);
                    return;
                }else{
                    reject("Shoppinglist doesn't exist");
                }
            }, delay);
        });
    }

}

export default MockListsApi;