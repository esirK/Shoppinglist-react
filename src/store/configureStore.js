import * as configureProductionStore from './configureStore.prod';
import * as configureDevStore from './configureStore.dev';

if(process.env.NODE_ENV === 'production') {
    module.exports = configureProductionStore;
}else {
    module.exports = configureDevStore;
}