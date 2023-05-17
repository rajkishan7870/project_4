import React from "react";
import style from "./Home.module.css";
import Navbar from "../../components/NavComp/Navbar";
import SideNav from "../../components/SideNavComp/SideNav";
import List from "../../components/HomeComp/List";
import { useSelector } from "react-redux";

export default function Home() {
  const selector = useSelector((store) => store.listSlice.background);

  return (
    <div className={style.parent}>
      <div className={style.nav}>
        <Navbar />
      </div>
      <div className={style.content}>
        <div>
          <SideNav />
        </div>

        <div className={style.home}>
          <img className={selector.length>0 ? style.img : style.initial}
            src={
              selector.length > 0
                ? selector[selector.length - 1].image
                : "https://images.pexels.com/photos/696680/pexels-photo-696680.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
          />
          <div className={style.card}>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}
