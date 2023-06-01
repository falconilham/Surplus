// searchSlice.js

import {createSlice} from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: '',
  reducers: {
    setSearch: (state, action) => (state = action.payload),
    clearSearch: () => {
      return '';
    },
  },
});

export const {setSearch, clearSearch} = errorSlice.actions;

export default errorSlice.reducer;
