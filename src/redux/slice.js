import { createSlice} from "@reduxjs/toolkit";


const listSlice = createSlice({
    name : "listSlice",
    initialState : {
        list : [],
        background : [],
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
        },
        editCard : (state,action) =>{
            console.log(action.payload)
            for(let i=0;i<state.list.length;i++){
                if(state.list[i].id === action.payload.cardid){
                    state.list[i].children[action.payload.index].title = "kishan"
                }
            }
            
        },
        removeCard : (state,action) =>{
            for(let i=0;i<state.list.length;i++){
                if(state.list[i].id === action.payload.cardid){
                    state.list[i].children.splice(action.payload.index,1)
                }
            }
            
        },
        changeBackground :(state,action)=>{
            
            state.background.push(action.payload)
        },
        
    }
})



export const {addList, addCard, editCard, removeCard , changeBackground} = listSlice.actions;

export default listSlice.reducer ;