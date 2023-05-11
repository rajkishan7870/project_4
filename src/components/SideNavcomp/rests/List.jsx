import React from "react";
import Card from "./Card";
import Addnew from "./Addnew";
import style from "./rest.module.css";

export default function List() {
  return (
    <div className={style.listx}>
      <div className={style.listcover}>
        <div>dynamic todo</div>
        <Card />
        <Addnew />
      </div>
    </div>
  );
}
