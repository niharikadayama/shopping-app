import ACTION_TYPES from './types';

const initialState = {
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      const item = action.payload;
      let qty = 1;
      const inCart =
        state.cart.findIndex(
          (cartItem: any) => cartItem.id === action.payload.id,
        ) !== -1;
      return {
        ...state,
        cart: inCart ? state.cart : [...state.cart, ...item, {qty: 1}],
      };
    case ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload.id),
      };
    case ACTION_TYPES.AdjustQty:
      return {
        ...state,
        cart: state.cart.map((item: any) =>
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
