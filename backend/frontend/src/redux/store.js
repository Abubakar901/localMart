import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shopReducer, shopDetailsReducer, newShopReducer } from '../reducers/shopReducer';
import { userReducer } from '../reducers/userReducer';
import { productReducer, productDetailsReducer } from '../reducers/productReducer';
import { getCartReducer, cartReducer, newCartReducer } from '../reducers/cartReducer';

const reducer=combineReducers({
    user: userReducer,
    shops: shopReducer,
    shopDetails: shopDetailsReducer,
    products: productReducer,
    productDetails:productDetailsReducer,
    cart : getCartReducer,
    deleteCart: cartReducer,
    newCart: newCartReducer,
    newShop: newShopReducer
});

let initialState = {};

const middleware = [thunk];

const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

