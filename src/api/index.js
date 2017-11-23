import MockUserApi from "./mockApi/User";
import {createUser} from "./productionApi/User";

const isProductionBuild = process.env.NODE_ENV !== 'production';

export const Api = {
    createUser: isProductionBuild ? createUser : MockUserApi.createUser
};
