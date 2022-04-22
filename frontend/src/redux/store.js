import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shopReducer, shopDetailsReducer } from '../reducers/shopReducers';

const reducer=combineReducers({
    shops: shopReducer,
    shopDetails: shopDetailsReducer
});

let initialState = {};

const middleware = [thunk];

const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

