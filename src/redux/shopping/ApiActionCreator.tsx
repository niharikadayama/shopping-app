import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './action';

const apiActionCreator = url => dispatch => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
        dispatch(fetchSuccess(response.data));
        console.log(fetchSuccess);
      })
      .catch(error => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiActionCreator;
