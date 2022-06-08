import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shopReducer, shopDetailsReducer, newShopReducer, deleteShopReducer,newShopReviewReducer,deleteShopReviewReducer } from '../reducers/shopReducer';
import { userReducer, allUsersReducer, profileReducer, userDetailsReducer} from '../reducers/userReducer';
import { productReducer, productDetailsReducer, newProductReducer, deleteProductReducer, newProductReviewReducer, deleteProductReviewReducer} from '../reducers/productReducer';
import { cartReducer } from '../reducers/cartReducer';
import { userOrderReducer, orderDetailsReducer, editDeleteOrderReducer, newOrderReducer } from '../reducers/orderReducer';

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
    users: allUsersReducer,
    orders: userOrderReducer,
    orderDetails: orderDetailsReducer,
    editAndDeleteOrder: editDeleteOrderReducer,
    newShopReview: newShopReviewReducer,
    deleteShopReview: deleteShopReviewReducer,
    newProductReview: newProductReviewReducer,
    deleteProductReview: deleteProductReviewReducer,
    updateProfile:profileReducer,
    userDetails : userDetailsReducer,
    newOrder: newOrderReducer
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

