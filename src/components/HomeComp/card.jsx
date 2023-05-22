import React, { useState } from "react";
import style from "./card.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { editCard } from "../../redux/slice";


export default function Card({
  cardInfo,
  handleDelete,
  onClick,
  input,
}) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(cardInfo.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    dispatch(editCard(editedTitle));
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedTitle(cardInfo.title);
  };

  const handleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleInputClick = (e) => {
    e.stopPropagation(); // Prevent click event propagation
  };

  return (
    <div className={style.parent}>
      <div onClick={onClick} className={style.card}>
        {editing ? (
          <input
            className={style.input}
            value={editedTitle}
            onClick={handleInputClick}
            onChange={handleChange}
          />
        ) : (
          cardInfo.title
        )}
      </div>
      <div className={style.cardDelete}>
        {editing ? (
          <>
            <div onClick={handleSave}>✅</div>
            <div onClick={handleCancel}>❎</div>
          </>
        ) : (
          <>
            <div onClick={handleEdit}>🖊</div>
            <ClearIcon onClick={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
}
