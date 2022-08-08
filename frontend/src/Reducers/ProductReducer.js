import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_BY_SHOP_REQUEST,
    PRODUCT_BY_SHOP_SUCCESS,
    PRODUCT_BY_SHOP_FAIL,
    NEW_PRODUCT_REVIEW_REQUEST,
    NEW_PRODUCT_REVIEW_SUCCESS,
    NEW_PRODUCT_REVIEW_FAIL,
    NEW_PRODUCT_REVIEW_RESET,
    DELETE_PRODUCT_REVIEW_REQUEST,
    DELETE_PRODUCT_REVIEW_SUCCESS,
    DELETE_PRODUCT_REVIEW_FAIL,
    DELETE_PRODUCT_REVIEW_RESET,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_RESET,
    SELLER_PRODUCT_REQUEST,
    SELLER_PRODUCT_SUCCESS,
    SELLER_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,
    CLEAR_ERRORS,
    HOME_PRODUCTS_REQUEST,
    HOME_PRODUCTS_SUCCESS,
    HOME_PRODUCTS_FAIL,
} from "../Constants/ProductsConstants";

export const productReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case HOME_PRODUCTS_REQUEST:
        case ALL_PRODUCT_REQUEST:
        case PRODUCT_BY_SHOP_REQUEST:
        case SELLER_PRODUCT_REQUEST:
        case ADMIN_PRODUCT_REQUEST:
            return {
                loading: true,
                product: [],
            };
        case HOME_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
            }
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                category: action.payload.category,
                city: action.payload.city,
            };
        case ADMIN_PRODUCT_SUCCESS:
        case SELLER_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                totalProducts: action.payload.totalProduct,
            };
        case PRODUCT_BY_SHOP_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case HOME_PRODUCTS_FAIL:
        case ALL_PRODUCT_FAIL:
        case PRODUCT_BY_SHOP_FAIL:
        case SELLER_PRODUCT_FAIL:
        case ADMIN_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const newProductReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_PRODUCT_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_PRODUCT_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload,
            };
        case NEW_PRODUCT_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case NEW_PRODUCT_REVIEW_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const deleteProductReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_PRODUCT_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case DELETE_PRODUCT_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_PRODUCT_REVIEW_RESET:
            return {
                ...state,
                isDeleted: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const deleteProductReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };

        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_PRODUCT_RESET:
            return {
                ...state,
                isDeleted: false,
            };
        case UPDATE_PRODUCT_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const newProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product,
            };
        case CREATE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CREATE_PRODUCT_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};