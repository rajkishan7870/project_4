import React from "react";
import Card from "./card";
import Add from "./Add";
import { useSelector } from "react-redux";
import style from "./List.module.css";
import { useNavigate } from "react-router";

export default function List() {
  const selector = useSelector((store) => store.listSlice.list);
  const navigate = useNavigate();
  function handleClick(index){
    navigate("/description")
  }
  return (
    <div className={style.parent}>
      {selector.length &&
        selector.map((list) => {
          return (
            <div className={style.parentList}>
              <div className={style.list} key={list.id}>
                {list.title}
              </div>
              {list?.children?.length > 0 &&
                list?.children.map((children, index) => {
                  return (
                    <div onClick={handleClick} className={style.card} key={children.id}>
                      <Card cardInfo={children} />
                    </div>
                  );
                })}
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
