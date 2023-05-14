import React from "react";
// import Card from "./Card";
import Addnew from "./Addnew";
import style from "./rest.module.css";
import { useSelector } from "react-redux";

export default function List() {
  const viewlist = useSelector((stores) => stores.listslice.list);
console.log(viewlist);

  return (
    <>
      <div>
        {viewlist.length &&
          viewlist.map((list) => {
            <div key={list.id}>{list.title}</div>;
            <div>
              <Addnew />
            </div>;
          })}
      </div>
      <div className={style.listx}>
        <div className={style.listcover}>
          {/* <div>dynamic todo</div> */}
          {/* <Card /> */}
          <Addnew />
        </div>
      </div>
    </>
  );
}
