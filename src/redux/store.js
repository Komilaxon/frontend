import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auth } from "./auth/auth";
import { getCategories } from "./get.categories";

export const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    [getCategories.reducerPath]: getCategories.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(auth.middleware)
      .concat(getCategories.middleware),
});

setupListeners(store.dispatch);
