// store.js

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import errorReducer from './errorSlice.js';
import authSlice from './authSlice.js';
import searchSlice from './searchSlice.js';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // if you do not want to persist this part of the state
  blacklist: ['error', 'search'],
};

const combinedReducer = combineReducers({
  error: errorReducer,
  auth: authSlice,
  search: searchSlice,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

const {dispatch} = store;
export {persistor, dispatch};
export default store;
