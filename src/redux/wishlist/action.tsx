import ACTION_TYPES from './types';

export const addToWishlist = item => ({
  type: ACTION_TYPES.ADD_TO_WISHLIST,
  payload: item,
});

export const removeFromWishlist = (itemID: number) => ({
  type: ACTION_TYPES.REMOVE_FROM_WISHLIST,
  payload: {
    id: itemID,
  },
});
