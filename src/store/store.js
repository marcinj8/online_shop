import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { products, cart, user } from "./reducers";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const combinedReducer = combineReducers({ products, cart, user });

const store = createStore(combinedReducer, composedEnhancer);

export default store;
