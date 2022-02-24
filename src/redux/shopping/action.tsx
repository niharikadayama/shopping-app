import ACTION_TYPES from './types';

export const fetchData = () => ({
  type: ACTION_TYPES.API_PENDING,
});

export const fetchSuccess = data => ({
  type: ACTION_TYPES.API_SUCCESS,
  payload: data,
});

export const fetchError = error => ({
  type: ACTION_TYPES.API_ERROR,
  payload: error,
});

export const addToCart = itemID => ({
  type: ACTION_TYPES.ADD_TO_CART,
  payload: {
    id: itemID,
  },
});

export const removeFromCart = itemID => ({
  type: ACTION_TYPES.REMOVE_FROM_CART,
  payload: {
    id: itemID,
  },
});

export const adjustQty = (itemID, value: number) => ({
  type: ACTION_TYPES.AdjustQty,
  payload: {
    id: itemID,
    qty: value,
  },
});

export const addToWishlist = (itemID: number) => ({
  type: ACTION_TYPES.ADD_TO_WISHLIST,
  payload: {
    id: itemID,
  },
});

export const removeFromWishlist = (itemID: number) => ({
  type: ACTION_TYPES.REMOVE_FROM_WISHLIST,
  payload: {
    id: itemID,
  },
});
