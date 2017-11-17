import {delay, generateRandomInt}  from './helper'; // setTimeout delay to simulate the delay of an AJAX call to a server.

const users = [
    {
        id: 123456,
        username: "einstein",
        firstname: "einstein",
        lastname: "carrey",
        password_hash: "d033e22ae348aeb5660fc2140aec35850c4da997",
        answer: "einstein",
        security_question: "Who am i?"
    },
    {
        id: 4567,
        username: "james",
        firstname: "james",
        lastname: "bond",
        password_hash: "1d2bba5d0b80938327ac901264bcf7d4fe492fe9",
        answer: "act movies",
        security_question: "What do i do?"
    }
];

class UserApi {

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

                if((users.findIndex(a => a.username == user.username)) != -1){
                    reject(`username \`${user.username}\` is already registered. Please provide a unique username`);
                }

                //Simulating creating a user account
                user.id = generateRandomInt();
                users.push(user);

                user.message = `user \`${user.username}\` has been created`;
                resolve(user);

            }, delay);
        });
    }

    static authenticateUSer(user){

    }

    static getCurrentUser(token){
        return new Promise((resolve, reject) => {
            // todo: Simulate server-xside authentication when token is invalid

            resolve(users[0]);
        });
    }
}

export default UserApi;