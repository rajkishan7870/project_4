import React from "react";
import style from "./card.module.css";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

export default function Card({ cardInfo, handleEdit, handleDelete, onClick }) {
  return (
    <div className={style.parent}>
      <div onClick={onClick} className={style.card}>
        {cardInfo.title}
      </div>
      <div className={style.cardDelete}>
        <EditIcon onClick={handleEdit} />
        <ClearIcon onClick={handleDelete} />
      </div>
    </div>
  );
}
