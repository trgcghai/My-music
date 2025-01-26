import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rootApi } from "@services/rootApi";
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
import { fileSlice } from "./features/file/fileSlice";
import { modalSlice } from "./features/modal/modalSlice";
import { authSlice } from "./features/auth/authSlice";

const persistConfig = {
  key: "persist",
  storage,
  blacklist: [rootApi.reducerPath, "modal.handleConfirm", "modal.handleCancel"],
};

const rootReducer = combineReducers({
  file: fileSlice.reducer,
  modal: modalSlice.reducer,
  auth: authSlice.reducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

const makeConfiguredStore = () => {
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignorePaths: ["modal.handleConfirm", "modal.handleCancel"],
        },
      }).concat(rootApi.middleware),
  });
};

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistedReducer = persistReducer<RootState>(
      persistConfig,
      rootReducer,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignorePaths: ["modal.handleConfirm", "modal.handleCancel"],
          },
        }).concat(rootApi.middleware),
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
