// errorSlice.js

import {createSlice} from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {
    setError: (state, action) => (state = action.payload),
    clearError: () => {
      return null;
    },
  },
});

export const {setError, clearError} = errorSlice.actions;

export default errorSlice.reducer;
