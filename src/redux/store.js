import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auth } from "./auth/auth";
import { categories } from "./api/get.categories";
import { user } from "./api/user";
import { works } from "./api/work";
import { order } from "./api/order";
import { sub_categories } from "./api/sub_categories";
import { skills } from "./api/skills";

export const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    [categories.reducerPath]: categories.reducer,
    [sub_categories.reducerPath]: sub_categories.reducer,
    [user.reducerPath]: user.reducer,
    [works.reducerPath]: works.reducer,
    [order.reducerPath]: order.reducer,
    [skills.reducerPath]: skills.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(auth.middleware)
      .concat(categories.middleware)
      .concat(user.middleware)
      .concat(works.middleware)
      .concat(sub_categories.middleware)
      .concat(order.middleware)
      .concat(skills.middleware),
});

setupListeners(store.dispatch);
