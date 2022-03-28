import ACTION_TYPES from './types';

const initialState = {
  addressInfo: [],
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_ADDRESS:
      return {
        ...state,
        addressInfo: [...state.addressInfo, action.payload],
      };
    case ACTION_TYPES.REMOVE_FROM_ADDRESS:
      return {
        ...state,
        addressInfo: state.addressInfo.filter(
          (item: any) => item.phoneNumber !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default addressReducer;
