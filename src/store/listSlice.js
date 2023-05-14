import { createSlice } from "@reduxjs/toolkit";

// // configureStore

const listslice = createSlice({
  name: "listslice",
  initialState: {
    list: [],
  },
  reducers: {
    addlist: (state, action) => {
      //       state.list.push(action.payload);
      console.log(action.payload);
      console.log("Action is m-", action);
    },
  },
});

export default listslice.reducer;
export const { addlist } = listslice.actions;
