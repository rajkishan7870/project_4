import { createSlice } from "@reduxjs/toolkit";
const listSlice = createSlice({
    name : "listSlice",
    initialState : {
        list : []
    },
    reducers : {
        addList : (state,action) =>{
            state.list.push(action.payload);
        },
        addCard : (state,action) =>{
            state.list.forEach((item)=>{
               if(item.id === action.payload.cardid){
                if(Object.hasOwn(item, "children")){
                    item.children.push(action.payload)
                }
                else{
                    item.children = [];
                    item.children.push(action.payload)
                }
               } 
            })
        }
    }
})
export const {addList, addCard} = listSlice.actions;
export default listSlice.reducer;