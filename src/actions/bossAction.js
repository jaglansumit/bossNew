export const ADD_DATA = 'ADD_DATA';

export const signup = data => {
  return async dispatch => {
    dispatch({
      type: ADD_DATA,
      payload: data,
    });
  };
};
