import { combineReducers } from "redux";
import bucketReducer from "./bucketReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
    cards: cardReducer,
    buckets: bucketReducer,

});

export default rootReducer