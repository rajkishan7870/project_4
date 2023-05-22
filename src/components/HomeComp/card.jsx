import React from "react";
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
  return (
    
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
       
  );
}
