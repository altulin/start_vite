import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { rtkQueryErrorLogger } from "./errorLogger";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  devTools: process.env.NODE_ENV === "development",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware, rtkQueryErrorLogger]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
