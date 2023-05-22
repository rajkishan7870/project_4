import { createSlice, current } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
    background: [],
  },
  reducers: {
    addList: (state, action) => {
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
    removeList: (state,action)=>{
      state.list.splice(action.payload,1);
    },

    editCard: (state, action) => {
      console.log("data in edit",action.payload);
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === action.payload.cardid) {
          state.list[i].children[action.payload.index].title = "kishan";
        }
      }
    },
    removeCard: (state, action) => {
      const {id} = action.payload
      state?.list?.map((list) => {
        list?.children?.map((child, index) => {
          if (child.id == id) {
            list?.children.splice(index, 1);
          }
        });
      })
    },
    changeBackground: (state, action) => {
      state.background.push(action.payload);
    },

    clearBoard : (state,action)=>{
      state.list = [];
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

     state.list.map((list)=>{
      if(list.id==destination){
        if ("children" in list) {
          list.children.splice(insertIndex, 0, add);
        }else{
          list.children=[add]
        }
      }
     }) 
       
    }  
  },
});

export const { addList, addCard,removeList, editCard, removeCard, changeBackground,clearBoard, removechild, reassign } =
  listSlice.actions;

export default listSlice.reducer;
