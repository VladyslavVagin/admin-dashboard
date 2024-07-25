// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { dashboardReducer } from "./dashboard/dashboardSlice";
import { ordersReducer } from "./orders/ordersSlice";
import { productsReducer } from "./products/productsSlice";
import { suppliersReducer } from "./suppliers/suppliersSlice";
import { customerReducer } from "./customers/customerSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    dashboard: dashboardReducer,
    orders: ordersReducer,
    products: productsReducer,
    suppliers: suppliersReducer,
    customers: customerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
