import { createSlice} from "@reduxjs/toolkit";


const listSlice = createSlice({
    name : "listSlice",
    initialState : [],
    reducers : {
        addList : (state,action) =>{
            state.push(action.payload);
        },
        addCard : (state,action) =>{
            state.forEach((item)=>{
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
        },
        editCard : (state,action) =>{
            console.log(action.payload)
            for(let i=0;i<state.length;i++){
                if(state[i].id === action.payload.cardid){
                    state[i].children[action.payload.index].title = "kishan"
                }
            }
            
        },
        removeCard : (state,action) =>{
            for(let i=0;i<state.length;i++){
                if(state[i].id === action.payload.cardid){
                    state[i].children.splice(action.payload.index,1)
                }
            }
            
        }
    }
})


export const {addList, addCard, editCard, removeCard} = listSlice.actions;
export default listSlice.reducer;