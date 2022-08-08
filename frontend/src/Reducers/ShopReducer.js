import {
    ALL_SHOP_REQUEST,
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,
    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,
    NEW_SHOP_REVIEW_REQUEST,
    NEW_SHOP_REVIEW_SUCCESS,
    NEW_SHOP_REVIEW_FAIL,
    NEW_SHOP_REVIEW_RESET,
    DELETE_SHOP_REVIEW_REQUEST,
    DELETE_SHOP_REVIEW_SUCCESS,
    DELETE_SHOP_REVIEW_FAIL,
    DELETE_SHOP_REVIEW_RESET,
    CREATE_SHOP_REQUEST,
    CREATE_SHOP_SUCCESS,
    CREATE_SHOP_FAIL,
    CREATE_SHOP_RESET,
    SELLER_SHOP_REQUEST,
    SELLER_SHOP_SUCCESS,
    SELLER_SHOP_FAIL,
    UPDATE_SHOP_REQUEST,
    UPDATE_SHOP_SUCCESS,
    UPDATE_SHOP_FAIL,
    UPDATE_SHOP_RESET,
    ADMIN_SHOP_REQUEST,
    ADMIN_SHOP_SUCCESS,
    ADMIN_SHOP_FAIL,
    DELETE_SHOP_REQUEST,
    DELETE_SHOP_SUCCESS,
    DELETE_SHOP_FAIL,
    DELETE_SHOP_RESET,
    CLEAR_ERRORS,
    HOME_SHOP_REQUEST,
    HOME_SHOP_SUCCESS,
    HOME_SHOP_FAIL,
} from "../Constants/ShopConstants";

// get all shops
export const shopReducer = (state = { shops: [] }, action) => {
    switch (action.type) {
        case ALL_SHOP_REQUEST:
        case ADMIN_SHOP_REQUEST:
        case SELLER_SHOP_REQUEST:
        case HOME_SHOP_REQUEST:
            return {
                loading: true,
                shop: [],
            };
        case HOME_SHOP_SUCCESS:
            return {
                loading: false,
                shops: action.payload.shops,
            }
        case ALL_SHOP_SUCCESS:
            return {
                loading: false,
                shops: action.payload.shops,
                shopsCounts: action.payload.shopsCounts,
                category: action.payload.shopCategory,
            };
        case ADMIN_SHOP_SUCCESS:
        case SELLER_SHOP_SUCCESS:
            return {
                loading: false,
                shops: action.payload.shops,
                totalShops: action.payload.totalShops,
            };
        case HOME_SHOP_FAIL:
        case ALL_SHOP_FAIL:
        case ADMIN_SHOP_FAIL:
        case SELLER_SHOP_FAIL:
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

// shop details reducer
export const shopDetailsReducer = (state = { shop: {} }, action) => {
    switch (action.type) {
        case SHOP_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case SHOP_DETAILS_SUCCESS:
            return {
                loading: false,
                shop: action.payload,
            };
        case SHOP_DETAILS_FAIL:
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

export const deleteShopReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_SHOP_REQUEST:
        case UPDATE_SHOP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_SHOP_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case UPDATE_SHOP_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case DELETE_SHOP_FAIL:
        case UPDATE_SHOP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_SHOP_RESET:
            return {
                ...state,
                isDeleted: false,
            };
        case UPDATE_SHOP_RESET:
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

export const newShopReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_SHOP_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_SHOP_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload,
            };
        case NEW_SHOP_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case NEW_SHOP_REVIEW_RESET:
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

export const deleteShopReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_SHOP_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_SHOP_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case DELETE_SHOP_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_SHOP_REVIEW_RESET:
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

export const newShopReducer = (state = { shop: {} }, action) => {
    switch (action.type) {
        case CREATE_SHOP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_SHOP_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                shop: action.payload.shop,
            };
        case CREATE_SHOP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CREATE_SHOP_RESET:
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