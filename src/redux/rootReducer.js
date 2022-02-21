import { combineReducers } from "redux";
import shopReducer from './shopping/reducer';
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
   shop: shopReducer,
   users: userReducer,
});

export default rootReducer;