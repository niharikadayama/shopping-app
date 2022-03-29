import ACTION_TYPES from './type';

const initialState = {
  currentTheme: 'System',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
