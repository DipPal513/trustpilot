// store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
 // Update the path based on where you place your slice

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
