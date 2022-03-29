import ACTION_TYPES from './types';

interface dataType {
  id?: number;
  category?: string;
  description?: string;
  image?: any;
  title?: string;
  price?: number;
  rating?: any;
}

const initialState = {
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      const cartItem = action.payload;
      const inCart =
        state.cart.findIndex((item: dataType) => item.id === cartItem.id) !==
        -1;
      return {
        ...state,
        cart: inCart ? state.cart : [...state.cart, cartItem],
      };
    case ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (removeItem: dataType) => removeItem.id !== action.payload.id,
        ),
      };
    case ACTION_TYPES.AdjustQty:
      return {
        ...state,
        cart: state.cart.map((item: dataType) =>
          item.id === action.payload.id
            ? {...item, qty: action.payload.qty}
            : item,
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
