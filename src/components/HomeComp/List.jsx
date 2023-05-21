import React, { useEffect, useState } from "react";
import Card from "./card";
import Add from "./Add";
import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../../redux/slice";
import style from "./List.module.css";
import { useNavigate } from "react-router";
import { editCard } from "../../redux/slice";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { removeList } from "../../redux/slice";

export default function List() {
  const selector = useSelector((store) => store.listSlice.list);
  const [newData, setNewData] = useState([]);
  const [input, setInput] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setNewData(selector);
  }, [selector]);

  function handleRemoveList(index) {
    dispatch(removeList(index));
  }
  function handleClick(card, index) {
    navigate(`/description/${card.title}`);
    dispatch(editCard({ index: index, title: "" }));
  }

  function handleDelete(index, card) {
    console.log("index",index)
    console.log("cardid",card.cardid)
    dispatch(removeCard({ index: index, cardid: card.cardid }));
  }

  return (
    <div className={style.parent}>
      {newData.map((list, index) => {
        return (
          <Droppable key={list.id} droppableId={String(list.id)}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <div className={style.parentList}>
                  <div className={style.list}>
                    {list.title}
                    <DeleteForeverIcon
                    sx={{
                      cursor : "pointer"
                    }}
                      onClick={() => handleRemoveList(index)}
                    />
                  </div>
                  <div className={style.card}>
                    {list?.children?.length > 0 &&
                      list?.children.map((card, index) => {
                        return (
                          <Draggable
                            key={card.id}
                            draggableId={String(card.id)}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card
                                  onClick={() => handleClick(card, index)}
                                  cardInfo={card}
                                  index={index}
                                  handleDelete={() => handleDelete(index, card)}
                                  input={input}
                                />
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                  </div>
                  <div className={style.addCard}>
                    <Add type="card" cardid={list.id} />
                  </div>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        );
      })}

      <div>
        <Add />
      </div>
    </div>
  );
}
