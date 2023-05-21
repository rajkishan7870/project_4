import { createSlice, current } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
    background: [],
  },
  reducers: {
    addList: (state, action) => {
      console.log(action.payload)
      state.list.push(action.payload);
    },
    addCard: (state, action) => {
      state.list.forEach((item) => {
        if (item.id === action.payload.cardid) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
    editCard: (state, action) => {
      console.log("data in edit",action.payload);
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === action.payload.cardid) {
          state.list[i].children[action.payload.index].title = action.payload.title;
        }
      }
    },
    removeCard: (state, action) => {
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === action.payload.cardid) {
          state.list[i].children.splice(action.payload.index, 1);
        }
      }
    },
    changeBackground: (state, action) => {
      state.background.push(action.payload);
    },

    removechild : (state,action)=>{
      const { childIndex, parentId } = action.payload;
      state.list.map((e) => {
        if (e.id === parentId) {
          e.children.splice(childIndex, 1);
        }
      });
    },

    reassign : (state,action)=>{
      const { destination, add, insertIndex } = action.payload;

     state.list.map((e)=>{
      if(e.id===destination){
        e.children.splice(insertIndex,0,add)
      }
     })
       
       
    }

    
  },
});

export const { addList, addCard, editCard, removeCard, changeBackground, removechild, reassign } =
  listSlice.actions;

export default listSlice.reducer;
