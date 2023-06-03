import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import transactionReducer from "./transactionSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    transactions: transactionReducer,
  },
});
