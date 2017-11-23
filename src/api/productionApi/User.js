import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const createUser = (user) => {
    let endpoint = baseUrl + '/user/register';
    user.security_question = "what?";
    user.answer = "that";
    return fetchFromApi('post', endpoint, user);
};

function fetchFromApi(method, endpoint, data=null){
    return new Promise((resolve,reject)=>{
            runRequest(method, endpoint, data).then((response) => {
                if (!response.ok) {
                    reject(response.statusText);
                    return;
                }
                resolve(response);
            })
            .catch(error => {
                if(String(error).includes('Network Error')){
                    reject("Could not connect to server. Please Check your internet connection");
                    return;
                }
                if(error.response.data.error_msg !== undefined){
                    reject(error.response.data.error_msg);
                    return;
                }
            });
    });
}

function runRequest(method, endpoint,data) {
    switch (method){
        case 'post':
            return axios.post(endpoint, data);
        case 'put':
            return axios.put(endpoint, data);
        case 'delete':
            return axios.post(endpoint);
        case 'get':
            return axios.post(endpoint);
    }
}


