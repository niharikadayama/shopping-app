import {combineReducers} from 'redux';
import shopReducer from './shopping/reducer';
import wishlistReducer from './wishlist/reducer';
import addressReducer from './address/reducer';

const rootReducer = combineReducers({
  cart: shopReducer,
  wishlist: wishlistReducer,
  address: addressReducer,
});

export default rootReducer;
