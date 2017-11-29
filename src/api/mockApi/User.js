import {delay, generateRandomInt, secret_key}  from './helper'; // setTimeout delay to simulate the delay of an AJAX call to a server.
import jsonwebtoken  from 'jsonwebtoken';

const users = [
    {
        id: 123456,
        username: "einstein",
        firstname: "einstein",
        lastname: "carrey",
        password_hash: "1234567890",
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

class MockUserApi {

    static createUser(user) {
        user = Object.assign({}, user); // create a copy of object passed in to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // Simulate server-side form data validation
                if ((user.username === "") || (user.password === "")) {
                    reject("Please provide a valid username and password");
                    return;
                }
                if ((user.security_question === "") || (user.answer === "")) {
                    reject("Please provide a valid security question and answer");
                    return;
                }
                if (user.password.length < 6) {
                    reject("password must be at-least 6 characters long");
                    return;
                }

                if((users.findIndex(a => a.username === user.username)) !== -1){
                    reject(`username \`${user.username}\` is already registered. Please provide a unique username`);
                    return;
                }

                //Simulating creating a user account
                user.id = generateRandomInt();
                users.push(user);

                resolve(user);

            }, delay);
        });
    }



    static loginUser(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // Simulate server-side form data validation
                if ((user.username === "") || (user.password === "")) {
                    reject("Please provide a valid username and password");
                    return;
                }

                if ((users.findIndex(a => (a.username === user.username && a.password_hash === user.password) )) === -1) {
                    reject("Wrong credentials combination");
                    return;
                }

                const userFound = users[users.findIndex(a => (a.username === user.username && a.password_hash === user.password))];
                // generate a mock token
                const token = jsonwebtoken.sign({
                    id: userFound.id
                    }, secret_key);

                resolve({token});

            }, delay);
        });
    }

    static getCurrentUser(token){
        return new Promise((resolve, reject) => {
            // todo: Simulate server-xside authentication when token is invalid
            resolve(users[0]);
        });
    }
}

export default MockUserApi;