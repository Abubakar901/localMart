import {
    HOME_PRODUCTS_REQUEST,
    HOME_PRODUCTS_SUCCESS,
    HOME_PRODUCTS_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    NEW_PRODUCT_REVIEW_REQUEST,
    NEW_PRODUCT_REVIEW_SUCCESS,
    NEW_PRODUCT_REVIEW_FAIL,
    DELETE_PRODUCT_REVIEW_REQUEST,
    DELETE_PRODUCT_REVIEW_SUCCESS,
    DELETE_PRODUCT_REVIEW_FAIL,
    PRODUCT_BY_SHOP_REQUEST,
    PRODUCT_BY_SHOP_SUCCESS,
    PRODUCT_BY_SHOP_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    SELLER_PRODUCT_REQUEST,
    SELLER_PRODUCT_SUCCESS,
    SELLER_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    CLEAR_ERRORS,
} from "../Constants/ProductsConstants";
import axios from "axios";

// get all shops
export const getHomeProducts = () => async(dispatch) => {
    try {
        dispatch({
            type: HOME_PRODUCTS_REQUEST,
        });

        let link = `/api/v1/home/products`;

        const { data } = await axios.get(link);

        dispatch({
            type: HOME_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: HOME_PRODUCTS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get all products
export const getProducts = () => async(dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        const { data } = await axios.get(`/api/v1/products`);

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get products by shop
export const getProductByShop = (id) => async(dispatch) => {
    try {
        dispatch({ type: PRODUCT_BY_SHOP_REQUEST });

        const { data } = await axios.get(`/api/v1/shop/products/${id}`);

        dispatch({
            type: PRODUCT_BY_SHOP_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_BY_SHOP_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get product details
export const getProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/products/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// new product review --- all user
export const newProductReview = (reviewData) => async(dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REVIEW_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.put(
            `/api/v1/product/review/new`,
            reviewData,
            config
        );

        dispatch({
            type: NEW_PRODUCT_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

// delete product review --- all user
export const deleteProductReviewByUser = (id) => async(dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REVIEW_REQUEST });

        const { data } = await axios.delete(
            `/api/v1/product/delete/review?productId=${id}`
        );

        dispatch({
            type: DELETE_PRODUCT_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

// delete product --- admin, seller
export const deleteProduct = (id) => async(dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        const { data } = await axios.delete(`/api/v1/unique/product/${id}`);

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Create prdoocut
export const createProduct = (productData) => async(dispatch) => {
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.post(
            `/api/v1/seller/products/new`,
            productData,
            config
        );

        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get seller products
export const getSellerProducts = () => async(dispatch) => {
    try {
        dispatch({ type: SELLER_PRODUCT_REQUEST });

        const { data } = await axios.get(`/api/v1/seller/products`);

        dispatch({
            type: SELLER_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SELLER_PRODUCT_FAIL,
            payload: error.payload.data.message,
        });
    }
};

// update product
export const updateProduct = (id, productData) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.put(
            `/api/v1/unique/product/${id}`,
            productData,
            config
        );

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get all products for admin
export const getAdminProducts = () => async(dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        const { data } = await axios.get(`/api/v1/admin/products`);

        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.payload.data.message,
        });
    }
};

// clear errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};