import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auth } from "./auth/auth";
import { getCategories } from "./api/get.categories";
import { user } from "./api/user";
import { works } from "./api/work";
import { order } from "./api/order";
import { getsub_categories } from "./api/sub_categories";

export const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    [getCategories.reducerPath]: getCategories.reducer,
    [getsub_categories.reducerPath]: getsub_categories.reducer,
    [user.reducerPath]: user.reducer,
    [works.reducerPath]: works.reducer,
    [order.reducerPath]: order.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(auth.middleware)
      .concat(getCategories.middleware)
      .concat(user.middleware)
      .concat(works.middleware)
      .concat(getsub_categories.middleware)
      .concat(order.middleware),
});

setupListeners(store.dispatch);
