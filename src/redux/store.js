import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

import cartReducer from './slice/cartSlice';
import productReducer from './slice/productSlice';
import authReducer from './slice/authSlice';

const persistCartConfig = {
  key: 'userCart',
  storage,
};
const persistProductConfig = {
  key: 'products',
  storage,
};
const persistAuthConfig = {
  key: 'auth',
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedProductReducer = persistReducer(
  persistProductConfig,
  productReducer
);
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    product: persistedProductReducer,
    auth: persistedAuthReducer,
  },
  middleware: () => [thunk],
  devTools: true,
});

export const persistor = persistStore(store);
