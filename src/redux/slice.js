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

    moveCardToAnotherList: (state, action) => {
      const { cardID, sourceListID, destinationListID } = action.payload;
      const cardIndex = state.list.findIndex((task) => task.cardID === cardID);

      if (cardIndex !== -1) {
        state.list[cardIndex].listID = destinationListID;

        if (sourceListID && sourceListID !== destinationListID) {
          const sourceList = state.list.filter((task) => task.listID === sourceListID);
          const sourceListIndex = state.list.findIndex((task) => task.listID === sourceListID);
          const sourceCardIndex = sourceList.findIndex((task) => task.cardID === cardID);

          if (sourceCardIndex !== -1) {
            sourceList.splice(sourceCardIndex, 1);
          }
          state.value.splice(sourceListIndex, 1, sourceList)
        }
      }
    },

    reorderCards: (state, action) => {
      console.log(current(state).list)
      console.log(action.payload)

      const tempState=[...state.list]
      const { targetListID, startIndex, endIndex } = action.payload;
      // console.log(startIndex, endIndex)
      const requiredList= tempState.find((list)=>list.id===targetListID)
      const requiredListIndex=tempState.findIndex((list)=>list.id==targetListID)

      // console.log(temp, "temp")
      console.log("list", requiredList)
      const [reorderedCard]=requiredList.children.splice(startIndex,1)
      requiredList.children.splice(endIndex, 0, reorderedCard)
      tempState.splice(requiredListIndex, 1, requiredList)
      // console.log(tempState)
      state.list=tempState
      console.log(current(state).list)
      
      //Not working
      // requiredList.cards[startIndex]=requiredList.cards[endIndex]
      // temp.splice(endIndex, 1, )
      // requiredList.cards[endIndex]=temp
      // const [removedCard] = cards.splice(startIndex, 1);
      // cards.splice(endIndex, 0, removedCard);

    }
  },
});

export const { addList, addCard, editCard, removeCard, changeBackground, moveCardToAnotherList, reorderCards } =
  listSlice.actions;

export default listSlice.reducer;
