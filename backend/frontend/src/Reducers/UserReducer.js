import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    FORGET_PASSWORD_REQUEST,
    RESET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    RESET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAIL,
    RESET_PASSWORD_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_RESET,
    ADMIN_USER_REQUEST,
    ADMIN_USER_SUCCESS,
    ADMIN_USER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    UPDATE_USER_ROLE_REQUEST,
    UPDATE_USER_ROLE_SUCCESS,
    UPDATE_USER_ROLE_FAIL,
    UPDATE_USER_ROLE_RESET,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_RESET,
    CLEAR_ERRORS
} from "../Constants/UserConstants";

// login, register, load user
export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        case USER_REGISTER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case USER_LOGIN_SUCCESS:
        case USER_REGISTER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case USER_LOGIN_FAIL:
        case USER_REGISTER_FAIL:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case LOAD_USER_FAIL:
            return {
                loading: true,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case LOGOUT_USER_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            };
        case LOGOUT_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.paylaod,
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


export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
        case UPDATE_USER_ROLE_REQUEST:
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_USER_ROLE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload.success,
                message: action.payload.message,
            };
        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
        case UPDATE_USER_ROLE_FAIL:
        case DELETE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
        case UPDATE_USER_ROLE_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        case DELETE_USER_RESET:
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

export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ADMIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADMIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.users,
                usersCount: action.payload.usersCount,
            };

        case ADMIN_USER_FAIL:
            return {
                ...state,
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


export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };

        case USER_DETAILS_FAIL:
            return {
                ...state,
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



export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGET_PASSWORD_REQUEST:
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FORGET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload,
            };

        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload,
            };

        case FORGET_PASSWORD_FAIL:
        case RESET_PASSWORD_FAIL:
            return {
                ...state,
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