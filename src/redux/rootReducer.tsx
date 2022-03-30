import {combineReducers} from 'redux';
import shopReducer from './shopping/reducer';
import wishlistReducer from './wishlist/reducer';
import addressReducer from './address/reducer';
import themeReducer from './theme/reducer';

const rootReducer = combineReducers({
  cart: shopReducer,
  wishlist: wishlistReducer,
  address: addressReducer,
  theme: themeReducer,
});

export default rootReducer;
