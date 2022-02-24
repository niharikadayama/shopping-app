import ACTION_TYPES from './types';

const initialState = {
  products: [],
  cart: [],
  loading: false,
  data: '',
  error: '',
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ACTION_TYPES.ADD_TO_CART:
      const inCart = state.cart.find(
        (item: any) => item.id === action.payload.id,
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item: any) =>
              item.id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : [...state.cart, {qty: 1}],
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
