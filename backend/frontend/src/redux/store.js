import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shopReducer, shopDetailsReducer, newShopReducer, deleteShopReducer } from '../reducers/shopReducer';
import { userReducer } from '../reducers/userReducer';
import { productReducer, productDetailsReducer, newProductReducer, deleteProductReducer} from '../reducers/productReducer';
import { getCartReducer, deleteCartReducer, newCartReducer } from '../reducers/cartReducer';

const reducer=combineReducers({
    user: userReducer,
    shops: shopReducer,
    shopDetails: shopDetailsReducer,
    products: productReducer,
    productDetails:productDetailsReducer,
    cart : getCartReducer,
    deleteCart: deleteCartReducer,
    newCart: newCartReducer,
    newShop: newShopReducer,
    newProduct : newProductReducer,
    deleteProduct: deleteProductReducer,
    deleteShop: deleteShopReducer 
});

let initialState = {};

const middleware = [thunk];

const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

