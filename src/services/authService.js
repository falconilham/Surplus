import api from './api';
import {setError} from '../redux/errorSlice';
import {dispatch} from '../redux';

export const login = async data => {
  console.log({data});
  try {
    const response = await api.post('/auth/login', data);
    console.log({response});
    return response.data;
  } catch (error) {
    console.log({error, dispatch});
    dispatch(setError(error?.response?.data?.message));
    return error;
  }
};
