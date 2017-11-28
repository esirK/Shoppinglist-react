import MockUserApi from "./mockApi/User";
import MockListsApi from "./mockApi/Lists";
import * as productionApi from "./productionApi";

const isProductionBuild = process.env.NODE_ENV !== 'production';

export const Api = {
    createUser: isProductionBuild ? productionApi.createUser : MockUserApi.createUser,
    loginUser: isProductionBuild ? productionApi.loginUser : MockUserApi.loginUser,
    createList: isProductionBuild ? productionApi.createList : MockListsApi.createList,
    getLists: isProductionBuild ? productionApi.getLists : MockListsApi.getLists
};
