import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { shopReducer, deleteShopReducer, shopDetailsReducer, newShopReviewReducer, deleteShopReviewReducer, newShopReducer } from "../Reducers/ShopReducer";
import { cartReducer } from "../Reducers/CartReducer";
import { productReducer, productDetailsReducer, newProductReviewReducer, deleteProductReviewReducer, deleteProductReducer, newProductReducer } from "../Reducers/ProductReducer";
import { userReducer, profileReducer, allUsersReducer, userDetailsReducer, forgotPasswordReducer } from "../Reducers/UserReducer";
import { newOrderReducer, userOrderReducer, orderDetailsReducer, editDeleteOrderReducer } from "../Reducers/OrderReducer";

const reducer = combineReducers({
    shops: shopReducer,
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
    updateProfile: profileReducer,
    newOrder: newOrderReducer,
    productDetails: productDetailsReducer,
    newProductReview: newProductReviewReducer,
    deleteProductReview: deleteProductReviewReducer,
    deleteShop: deleteShopReducer,
    deleteProduct: deleteProductReducer,
    orders: userOrderReducer,
    orderDetails: orderDetailsReducer,
    editAndDeleteOrder: editDeleteOrderReducer,
    users: allUsersReducer,
    userDetails: userDetailsReducer,
    shopDetails: shopDetailsReducer,
    newShopReview: newShopReviewReducer,
    deleteShopReview: deleteShopReviewReducer,
    newShop: newShopReducer,
    newProduct: newProductReducer,
    forgotPassword: forgotPasswordReducer
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems") ?
            JSON.parse(localStorage.getItem("cartItems")) : [],
        shippingInfo: localStorage.getItem("shippingInfo") ?
            JSON.parse(localStorage.getItem("shippingInfo")) : {},
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;