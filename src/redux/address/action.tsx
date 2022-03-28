import ACTION_TYPES from './types';

export const addToAddress = item => ({
  type: ACTION_TYPES.ADD_TO_ADDRESS,
  payload: item,
});

export const editAddress = (
  Fullname,
  phoneNumber,
  pincode,
  city,
  states,
  locality,
  flatNo,
) => ({
  type: ACTION_TYPES.EDIT_ADDRESS,
  payload: {
    Fullname: Fullname,
    phoneNumber: phoneNumber,
    pincode: pincode,
    city: city,
    states: states,
    locality: locality,
    flatNo: flatNo,
  },
});

export const removeFromAddress = itemID => ({
  type: ACTION_TYPES.REMOVE_FROM_ADDRESS,
  payload: {
    id: itemID,
  },
});
