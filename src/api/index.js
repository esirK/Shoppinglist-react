import MockUserApi from "./mockApi/User";
import MockListsApi from "./mockApi/Lists";
import MockItemsApi from "./mockApi/Items";
import * as productionApi from "./productionApi";

const isProductionBuild = process.env.NODE_ENV !== 'production';

export const Api = {
    createUser: isProductionBuild ? productionApi.createUser : MockUserApi.createUser,
    loginUser: isProductionBuild ? productionApi.loginUser : MockUserApi.loginUser,
    createList: isProductionBuild ? productionApi.createList : MockListsApi.createList,
    getLists: isProductionBuild ? productionApi.getLists : MockListsApi.getLists,
    deleteList: isProductionBuild ? productionApi.deleteList : MockListsApi.deleteList,
    updateList: isProductionBuild ? productionApi.updateList : MockListsApi.updateList,
    listItems: isProductionBuild ? productionApi.listItems : MockItemsApi.listItems,
    createItem: isProductionBuild ? productionApi.createItem : MockItemsApi.createItem
};
