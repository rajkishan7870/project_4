import React from "react";
import SideNav from "../../components/SideNavcomp/SideNav";
import Header from "../../components/SideNavcomp/rests/Header";
import List from "../../components/SideNavcomp/rests/List";
import style from "./Home.module.css";
export default function Home() {
  return (
    <div className={style.cont}>
      <Header />
      <div className={style.main}>
        <SideNav />
        <div className={style.lists}>
          <List />
        </div>
        {/* <div className={style.lists}>
          <List />
        </div> */}
      </div>
    </div>
  );
}
