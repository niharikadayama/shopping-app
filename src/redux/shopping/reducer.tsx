import ACTION_TYPES from './types';

const initialState = {
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      const cartItem = action.payload;
      const inCart =
        state.cart.findIndex((item: any) => item.id === action.payload.id) !==
        -1;
      return {
        ...state,
        cart: inCart ? state.cart : [...state.cart, cartItem],
      };
    case ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem: any) => cartItem.id !== action.payload.id,
        ),
      };
    case ACTION_TYPES.AdjustQty:
      return {
        ...state,
        cart: state.cart.map((cartItem: any) =>
          cartItem.id === action.payload.id
            ? {...cartItem, qty: action.payload.qty}
            : cartItem,
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
