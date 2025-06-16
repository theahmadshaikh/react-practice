import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartDrawerReducer from "./cartDrawerSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

// --- Persist only the cart slice ---
const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const appStore = configureStore({
  reducer: {
    cart: persistedCartReducer,      
    cartDrawer: cartDrawerReducer,   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(appStore);
export default appStore;
