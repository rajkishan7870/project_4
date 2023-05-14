import { configureStore } from "@reduxjs/toolkit";
import listslice from "./listSlice";

const store = configureStore({
  reducer: {
    // getslice: listslice,
    listslice: listslice,
  },
});

export default store;


