import ACTION_TYPES from './types';

const initialState = {
  wishlist: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_WISHLIST:
      const wishlistItem = action.payload;
      const inWishlist =
        state.wishlist.findIndex(
          (item: any) => item.id === action.payload.id,
        ) !== -1;
      return {
        ...state,
        wishlist: inWishlist
          ? state.wishlist
          : [...state.wishlist, wishlistItem],
      };
    case ACTION_TYPES.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item: any) => item.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default wishlistReducer;
