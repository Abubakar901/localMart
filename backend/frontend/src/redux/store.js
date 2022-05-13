import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shopReducer, shopDetailsReducer, newShopReducer, deleteShopReducer } from '../reducers/shopReducer';
import { userReducer, allUsersReducer} from '../reducers/userReducer';
import { productReducer, productDetailsReducer, newProductReducer, deleteProductReducer} from '../reducers/productReducer';
import { cartReducer } from '../reducers/cartReducer';

const reducer=combineReducers({
    user: userReducer,
    shops: shopReducer,
    shopDetails: shopDetailsReducer,
    products: productReducer,
    productDetails:productDetailsReducer,
    newShop: newShopReducer,
    newProduct : newProductReducer,
    deleteProduct: deleteProductReducer,
    deleteShop: deleteShopReducer,
    cart: cartReducer,
    users: allUsersReducer
});

let initialState = {
    cart : {
            cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
            shippingInfo: localStorage.getItem("shippingInfo") 
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
};

const middleware = [thunk];

const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

