import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice'
import cartReducer from '../features/cartSlice'
import appReducer from '../'
export const store = configureStore({
  reducer: {
   auth : authReducer,
   cart : cartReducer,
   app  : 
  }
});