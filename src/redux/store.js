import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count/countSlice";
import productReducer from "./products/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});

export default store;
