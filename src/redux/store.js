import { configureStore } from "@reduxjs/toolkit";
import listSlice from './slice';
const store = configureStore({
    reducer : {
        listSlice : listSlice
    }
})

export default store;