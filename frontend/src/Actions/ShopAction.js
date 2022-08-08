import axios from "axios";
import {
    HOME_SHOP_REQUEST,
    HOME_SHOP_SUCCESS,
    HOME_SHOP_FAIL,
    ALL_SHOP_REQUEST,
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,
    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,
    NEW_SHOP_REVIEW_REQUEST,
    NEW_SHOP_REVIEW_SUCCESS,
    NEW_SHOP_REVIEW_FAIL,
    DELETE_SHOP_REVIEW_REQUEST,
    DELETE_SHOP_REVIEW_SUCCESS,
    DELETE_SHOP_REVIEW_FAIL,
    CREATE_SHOP_REQUEST,
    CREATE_SHOP_SUCCESS,
    CREATE_SHOP_FAIL,
    SELLER_SHOP_REQUEST,
    SELLER_SHOP_SUCCESS,
    SELLER_SHOP_FAIL,
    UPDATE_SHOP_REQUEST,
    UPDATE_SHOP_SUCCESS,
    UPDATE_SHOP_FAIL,
    ADMIN_SHOP_REQUEST,
    ADMIN_SHOP_SUCCESS,
    ADMIN_SHOP_FAIL,
    DELETE_SHOP_REQUEST,
    DELETE_SHOP_SUCCESS,
    DELETE_SHOP_FAIL,
    CLEAR_ERRORS,
} from "../Constants/ShopConstants";

// get all shops
export const getHomeShops = () => async(dispatch) => {
    try {
        dispatch({
            type: HOME_SHOP_REQUEST,
        });

        let link = `/api/v1/home/shops`;

        const { data } = await axios.get(link);

        dispatch({
            type: HOME_SHOP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: HOME_SHOP_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get all shops
export const getShops = () => async(dispatch) => {
    try {
        dispatch({
            type: ALL_SHOP_REQUEST,
        });

        let link = `/api/v1/shops`;

        const { data } = await axios.get(link);

        dispatch({
            type: ALL_SHOP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_SHOP_FAIL,
            payload: error.response.data.message,
        });
    }
};

// shop details
export const getShopDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: SHOP_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/shop/${id}`);

        dispatch({
            type: SHOP_DETAILS_SUCCESS,
            payload: data.shop,
        });
    } catch (error) {
        dispatch({
            type: SHOP_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// new shop review
export const newShopReview = (reviewData) => async(dispatch) => {
    try {
        dispatch({ type: NEW_SHOP_REVIEW_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.put(
            `/api/v1/shop/review/new`,
            reviewData,
            config
        );

        dispatch({
            type: NEW_SHOP_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: NEW_SHOP_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

// delete shop review
export const deleteShopReviewByUser = (id) => async(dispatch) => {
    try {
        dispatch({ type: DELETE_SHOP_REVIEW_REQUEST });

        const { data } = await axios.delete(
            `/api/v1/shop/delete/reviews?shopId=${id}`
        );

        dispatch({
            type: DELETE_SHOP_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_SHOP_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get seller shops
export const getSellerShops = () => async(dispatch) => {
    try {
        dispatch({ type: SELLER_SHOP_REQUEST });

        const { data } = await axios.get(`/api/v1/seller/shops`);

        dispatch({
            type: SELLER_SHOP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SELLER_SHOP_FAIL,
            payload: error.payload.data.message,
        });
    }
};

// update shop
export const updateShop = (id, shopData) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_SHOP_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.put(
            `/api/v1/unique/shop/${id}`,
            shopData,
            config
        );

        dispatch({
            type: UPDATE_SHOP_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_SHOP_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get all shops for admin
export const getAdminShops = () => async(dispatch) => {
    try {
        dispatch({ type: ADMIN_SHOP_REQUEST });

        const { data } = await axios.get(`/api/v1/admin/shops`);

        dispatch({
            type: ADMIN_SHOP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_SHOP_FAIL,
            payload: error.payload.data.message,
        });
    }
};

//  delete shop request
export const deleteShop = (id) => async(dispatch) => {
    try {
        dispatch({ type: DELETE_SHOP_REQUEST });

        const { data } = await axios.delete(`/api/v1/unique/shop/${id}`);

        dispatch({
            type: DELETE_SHOP_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_SHOP_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Create shop --- seller
export const createShop = (shopData) => async(dispatch) => {
    try {
        dispatch({ type: CREATE_SHOP_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.post(
            `/api/v1/seller/shops/new`,
            shopData,
            config
        );

        dispatch({
            type: CREATE_SHOP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_SHOP_FAIL,
            payload: error.response.data.message,
        });
    }
};

// clear errors
export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};