import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducers/cardReducer";
import bucketReducer from "./reducers/bucketReducer";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;
