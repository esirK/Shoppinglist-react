export const delay = 0;
export const secret_key = 'random_secret_key';
import jsonwebtoken  from 'jsonwebtoken';

//Generate a random integer
export const generateRandomInt = () =>{
    const randomFloat = Math.random();
    return Math.round(randomFloat * 1000000);
};

export const userIsAuthenticated = () =>{
    const token = localStorage.getItem('token');
    let authenticatedUser = false;

    jsonwebtoken.verify(token, secret_key, (err, decoded) => {
        if(err){
            authenticatedUser = false;
        }else if(decoded) {
            authenticatedUser = decoded.id;
        }
    });
    return authenticatedUser;
};
