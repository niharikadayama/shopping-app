import {GET_USERS} from './types';

const INITIAL_STATE = {
  users: [],
  loading: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
