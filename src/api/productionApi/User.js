import axios from 'axios';

const baseUrl = 'http://localhost:5000';

function fetchFromApi(method, endpoint, data=null){
    return new Promise((resolve,reject)=>{
            runRequest(method, endpoint, data).then((response) => {
                if (response.status !== 200 && response.status !== 201) {
                    reject(response.statusText);
                    return;
                }
                resolve(response.data);
            })
            .catch(error => {
                if(String(error).includes('Network Error')){
                    reject("Could not connect to server. Please Check your internet connection");
                    return;
                }
                if(error.response.data.error_msg !== undefined){
                    reject(error.response.data.error_msg);
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

export const createUser = (user) => {
    let endpoint = baseUrl + '/user/register';
    return fetchFromApi('post', endpoint, user);
};

export const loginUser = (user) => {
    let endpoint = baseUrl + '/user/login';
    return fetchFromApi('post', endpoint, user);
};

