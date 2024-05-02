// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlices';

const store = configureStore({
  reducer: {
    product: productReducer
  }
});

export default store;
