import React from "react";
import style from "./card.module.css";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { editCard } from "../../redux/slice";
import { Draggable } from "react-beautiful-dnd";

export default function Card({
  cardInfo,
  handleDelete,
  onClick,
  input,
}) {
  const dispatch = useDispatch();
  return (
    <Draggable draggableId={String(cardInfo.id)} index={cardInfo.cardid}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={style.parent}>
          <div onClick={onClick} className={style.card}>
            {input ? (
              <input
                className={style.input}
                value={cardInfo.title}
                onChange={(e) => {
                  dispatch(editCard(e.target.value));
                }}
              />
            ) : (
              cardInfo.title
            )}
          </div>
          <div className={style.cardDelete}>
            
            <ClearIcon onClick={handleDelete} />
          </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
