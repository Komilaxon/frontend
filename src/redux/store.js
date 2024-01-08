import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auth } from "./auth/auth";
import { getCategories } from "./api/get.categories";
import { user } from "./api/user";
import { works } from "./api/work";

export const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    [getCategories.reducerPath]: getCategories.reducer,
    [user.reducerPath]: user.reducer,
    [works.reducerPath]: works.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(auth.middleware)
      .concat(getCategories.middleware)
      .concat(user.middleware)
      .concat(works.middleware),
});

setupListeners(store.dispatch);
