import React from "react";
import style from "./SideNav.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TocIcon from "@mui/icons-material/Toc";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";

export default function SideNav() {
  return (
    <div className={style.sidenav}>
      {/* <div className={style.navwrap}> */}
        <div className={style.heading}>
          TRELLO CLONING
          <ArrowBackIosIcon />
        </div>
        <hr />
        <div className={style.icons}>
          <DashboardIcon />
          Boards
        </div>
        <div className={style.icons}>
          <PersonIcon />
          Members
          <AddIcon />
        </div>
        <div className={style.icons}>
          <SettingsIcon />
          WS Settings
          <KeyboardArrowDownIcon />
        </div>
        <div className={style.icons}>Workspace views</div>
        <div className={style.icons}>
          <TocIcon />
          Table
        </div>
        <div className={style.icons}>
          <CalendarMonthIcon />
          Calender
        </div>

        <div className={style.icons}>
          Your Boards
          <AddIcon />
        </div>
        <div className={style.icons}>
          <FolderSpecialIcon />
          Project1
        </div>
      {/* </div> */}
    </div>
  );
}
