import ACTION_TYPES from './types';

export const addToCart = item => ({
  type: ACTION_TYPES.ADD_TO_CART,
  payload: item,
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
