import ACTION_TYPES from './types';

const initialState = {
  cart: [],
  // wishlist: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      const item = action.payload;
      console.log(item.id);
      const inCart =
        state.cart.findIndex((item: any) => item.id === action.payload.id) !==
        -1;
      return {
        ...state,
        cart: inCart ? [state.cart] : [...state.cart, item],
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
    // case ACTION_TYPES.ADD_TO_WISHLIST:
    //   const wishlistItem = action.payload;
    //   const inWishlist =
    //     state.cart.findIndex((item: any) => item.id === action.payload.id) !==
    //     -1;
    //   return {
    //     ...state,
    //     cart: inWishlist ? [state.wishlist] : [...state.wishlist, wishlistItem],
    //   };
    default:
      return state;
  }
};

export default shopReducer;
