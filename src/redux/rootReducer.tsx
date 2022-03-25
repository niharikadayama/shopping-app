import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import shopReducer from './shopping/reducer';
import wishlistReducer from './wishlist/reducer';

const rootReducer = combineReducers({
  shop: shopReducer,
  wishlist: wishlistReducer,
  form: formReducer,
});

export default rootReducer;
