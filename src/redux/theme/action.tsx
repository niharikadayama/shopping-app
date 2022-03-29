import ACTION_TYPES from './type';

export const setTheme = (theme: string) => ({
  type: ACTION_TYPES.SET_THEME,
  payload: theme,
});
