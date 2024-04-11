import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import { userApi } from "../Middleware/fetchReducer";
import localStorageMiddleware from "../Middleware/LocalMiddleware";

// const logger = createLogger();

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(logger, localStorgeMiddleware, userApi.middleware),
    getDefaultMiddleware().concat(localStorageMiddleware, userApi.middleware),
  
  // preloadedState: JSON.parse(localStorage.getItem("reduxState")) || {},

  // devTools: true,
});
