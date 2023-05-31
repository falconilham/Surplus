// store.js

import {configureStore} from '@reduxjs/toolkit';
import errorReducer from './errorSlice.js';

const store = configureStore({
  reducer: {
    error: errorReducer,
    // Add other reducers here if needed
  },
});

const {dispatch} = store;
export {dispatch};
export default store;
