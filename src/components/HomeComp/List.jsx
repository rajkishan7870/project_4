import React from "react";
import Card from "./card";
import Add from "./Add";
import { useSelector, useDispatch } from "react-redux";
import { editCard, removeCard } from "../../redux/slice";
import style from "./List.module.css";
import { useNavigate } from "react-router";

export default function List() {
  const selector = useSelector((store) => store.listSlice.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(card) {
    navigate(`/description/${card.title}`)
  }
  function handleEdit(index, card) {
    dispatch(editCard({ index: index, cardid: card.cardid }));
  }
  function handleDelete(index, card) {
    dispatch(removeCard({ index: index, cardid: card.cardid }));
  }

  return (
    <div className={style.parent}>
      {selector.map((list) => {
        return (
          <div className={style.parentList} key={list.id}>
            <div className={style.list}>{list.title}</div>
            <div className={style.card}>
              {list?.children?.length > 0 &&
                list?.children.map((card, index) => {
                  return (
                    <div key={card.id}>
                      <Card
                        onClick={() => handleClick(card)}
                        cardInfo={card}
                        handleEdit={() => handleEdit(index, card)}
                        handleDelete={() => handleDelete(index, card)}
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
  );
}
