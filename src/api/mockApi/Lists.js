import {delay}  from '../constants'; // setTimeout delay to simulate the delay of an AJAX call to a server.

let lists = [
    {
        id: 1,
        title: "back to school",
        created_on: "2017-10-12 10:40:32",
        updated_on: "",
        user_id: 4567
    },
    {
        id: 2,
        title: "Weekend party",
        created_on: "2017-10-12 10:40:32",
        updated_on: "",
        user_id: 4567
    },
    {
        id: 3,
        title: "Kisumu tour",
        created_on: "2017-10-12 10:40:32",
        updated_on: "",
        user_id: 123456
    },
    {
        id: 4,
        title: "Picnic",
        created_on: "2017-10-12 10:40:32",
        updated_on: "",
        user_id: 123456
    }
];

//Generate a random ID
const generateId = () => {
    const randomFloat = Math.random();
    return Math.round(randomFloat * 1000000);
};

class MockListsApi {

    static createList(list) {
        list = Object.assign({}, list); // create a copy of object passed in to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {

            if(list.title === ""){
               reject("shoppinglist title must be provided");
               return;
            }

            // todo: Simulate validating user authentication
            const user_id = 123456;
            if(lists.findIndex(a => a.title.toUpperCase() === list.title.toUpperCase() && user_id === 123456) !== -1){
                reject(`\`${list.title}\` already exists`);
                return;
            }

            const newList = {
                id: generateId(),
                title: list.title,
                created_on: "2017-11-15 10:40:32",
                updated_on: "",
                user_id: 123456
            };
            lists.push(newList);
            resolve();
        });
    }

    static getLists(list_id = null) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //todo:  Simulate validating unauthorised user

                // Simulate fetching all lists belonging to user 123456
                let currentUsersLists = [];
                let validLists;


                lists.map((list) => {
                    if(list.user_id === 123456){
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

}

export default MockListsApi;