import * as actionTypes from './types';

const cart = [];

const shopReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //get the item data from products array
      const item = state.find(prod => prod.id === action.payload.id);
      // check if item is in cart already
      const inCart = state.find((item: any) => item.id === action.payload.id);

      return {
        ...state,
        cart: inCart
          ? state.map((item: any) =>
              item.id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : [...state, {qty: 1}],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.filter((item: any) => item.id !== action.payload.id),
      };
    case actionTypes.AdjustQty:
      return {
        ...state,
        cart: state.map((item: any) =>
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
