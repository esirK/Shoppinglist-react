import MockUserApi from "./mockApi/User";
import * as productionApi from "./productionApi/User";

const isProductionBuild = process.env.NODE_ENV !== 'production';

export const Api = {
    createUser: isProductionBuild ? productionApi.createUser : MockUserApi.createUser,
    loginUser: isProductionBuild ? productionApi.loginUser : MockUserApi.loginUser
};
