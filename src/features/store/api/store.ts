import { configureStore } from "@reduxjs/toolkit";
import { api } from "../config/api";
import { rtkQueryErrorLogger } from "../config/errorLogger";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  devTools: process.env.NODE_ENV === "development",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware, rtkQueryErrorLogger]),
});
