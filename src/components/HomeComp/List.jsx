import React, { useState } from "react";
import Card from "./card";
import Add from "./Add";
import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../../redux/slice";
import style from "./List.module.css";
import { useNavigate } from "react-router";
import { editCard } from "../../redux/slice";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { moveCardToAnotherList, reorderCards } from "../../redux/slice";

export default function List() {
  const selector = useSelector((store) => store.listSlice.list);
  const [input, setInput] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(card,index) {
    navigate(`/description/${card.title}`);
    dispatch(editCard({index : index, title :""}))
  }
  
  function handleDelete(index, card) {
    dispatch(removeCard({ index: index, cardid: card.cardid }));
  }

  const dragEndHandler = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    // const sourceListID = source.droppableId; // Define sourceListID here
    // const destinationListID = destination.droppableId;
    // const cardID = result.draggableId;
    // const startIndex = source.index;
    // const endIndex = destination.index;

    // if (destinationListID !== sourceListID) {
    //   dispatch(
    //     moveCardToAnotherList({
    //       cardID: cardID,
    //       sourceListID: sourceListID,
    //       destinationListID: destinationListID,
    //     })
    //   );
    // } else if (startIndex !== endIndex) {
    //   dispatch(
    //     reorderCards({
    //       targetListID: 1,
    //       startIndex: startIndex,
    //       endIndex: endIndex,
    //       // requiredList: requiredList,
    //       // requiredListIndex: requiredListIndex
    //     })
    //   );
    // }
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Droppable droppableId={"item-1"}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className={style.parent}>
              {selector.map((list, index) => {
                return (
                  <div key={list.id} className={style.parentList}>
                    <div className={style.list}>{list.title}</div>
                    <div className={style.card}>
                      {list?.children?.length > 0 &&
                        list?.children.map((card,index) => {
                          return (
                            <div key={card.id}>
                              <Card
                                onClick={() => handleClick(card,index)}
                                cardInfo={card}
                                index={index}
                                handleDelete={() => handleDelete(index, card)}
                                input={input}
                              />
                            </div>
                          );
                        })}
                    </div>
                    <div className={style.addCard}>
                      <Add type="card" cardid={list.id} />
                    </div>
                  </div>
                );
              })}

              <div>
                <Add />
              </div>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
