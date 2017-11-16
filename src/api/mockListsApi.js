import {delay}  from './constants'; // setTimeout delay to simulate the delay of an AJAX call to a server.

// This file mocks the shoppinglist web API
const lists = [
    {
        id: 1,
        title: "james",
        created_on: "james",
        updated_on: "bond",
        user_id: 4567
    }
];

//Generate a random user ID
const generateId = () => {
    const randomFloat = Math.random();
    return Math.round(randomFloat * 1000000);
};

class ListsApi {

    static createUser(user) {
        user = Object.assign({}, user); // create a copy of object passed in to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side form data validation
                if ((user.username == "") || (user.password == "")) {
                    reject("Please provide a valid username and password");
                }
                if ((user.security_question == "") || (user.answer == "")) {
                    reject("Please provide a valid security question and answer");
                }
                if (user.password.length < 6) {
                    reject("password must be at-least 6 characters long");
                }

                if((lists.findIndex(a => a.username == user.username)) != -1){
                    reject(`username \`${user.username}\` is already registered. Please provide a unique username`);
                }


                //Simulating creating a user account
                user.id = generateId();
                lists.push(user);


                user.message = `user \`${user.username}\` has been created`;
                resolve(user);

            }, delay);
        });
    }
}

export default ListsApi;