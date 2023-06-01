import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  firstName: '',
  gender: '',
  id: null,
  image: '',
  lastName: '',
  token: '',
  username: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => (state = action.payload),
    clearAuth: state => (state = initialState),
    setToken: (state, action) => (state.token = action.payload),
    clearToken: state => (state.token = null),
  },
});

export const {setToken, clearToken, setAuth, clearAuth} = authSlice.actions;

export default authSlice.reducer;
