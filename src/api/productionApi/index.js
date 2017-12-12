import axios from 'axios';
import {reAuthenticateIfStatusCodeIs401} from "../../helper";

const baseUrl = 'http://localhost:5000';
const config = {
    headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}
};

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
                if(!endpoint.includes('login')) {
                    reAuthenticateIfStatusCodeIs401(error);
                }
                if(String(error).includes('Network Error')){
                    reject("Could not connect to server. Please check your network connection");
                    return;
                }
                if(error.response.data.error_msg !== undefined){
                    reject(error.response.data.error_msg);
                    return;
                }
                reject(error);
            });
    });
}

function runRequest(method, endpoint,data) {
    switch (method){
        case 'post':
            return axios.post(endpoint, data, config);
        case 'put':
            return axios.put(endpoint, data, config);
        case 'delete':
            return axios.delete(endpoint, config);
        case 'get':
            return axios.get(endpoint, config);
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

export const createList = (list) => {
    let endpoint = baseUrl + '/shoppinglist';
    return fetchFromApi('post', endpoint, list);
};

export const getLists = () => {
    let endpoint = baseUrl + '/shoppinglist/';
    return fetchFromApi('get', endpoint);
};

export const deleteList = (listId) => {
    let endpoint = baseUrl + '/shoppinglist/'+listId;
    return fetchFromApi('delete', endpoint);
};

export const updateList = (list) => {
    list.title = list.data;
    let endpoint = baseUrl + '/shoppinglist/'+list.id+'/';
    return fetchFromApi('put', endpoint, list);
};

export const listItems = (listId) => {
    let endpoint = baseUrl + '/shoppinglist/'+listId+'/items';
    return fetchFromApi('get', endpoint);
};

export const createItem = (listId, item) => {
    let endpoint = baseUrl + '/shoppinglist/'+listId+'/items';
    return fetchFromApi('post', endpoint, item);
};

export const deleteItem = (itemId) => {
    let endpoint = baseUrl + '/items/'+itemId;
    return fetchFromApi('delete', endpoint);
};

export const updateItem = (updatedItem) => {
    let endpoint = baseUrl + '/items/'+updatedItem.id;
    return fetchFromApi('put', endpoint, updatedItem.data);
};
