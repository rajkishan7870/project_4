import React from "react";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Button, TextField, Avatar } from "@mui/material";
import Basicmenu from "./Menu";
import style from "./Navbar.module.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InfoIcon from "@mui/icons-material/Info";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearBoard } from "../../redux/slice";

export default function Navbar() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function handleBackground() {
    navigate("/background");
  }

  function handleClearBoard() {
    dispatch(clearBoard());
  }

  return (
    <div className={style.parent}>
      <div className={style.parentContFirst}>
        <Button sx={{ color: "white", textTransform: "none" }}>
          <AnalyticsIcon />
          KAN-BAN
        </Button>
        <Basicmenu name={"Recent"} />
        <Button
          sx={{ color: "white", textTransform: "none" }}
          onClick={handleBackground}
        >
          Background image
        </Button>
        <Button
          sx={{
            color: "white",
            textTransform: "none",
            "&:hover": {
              bgcolor: "lightgray",
            },
          }}
          onClick={handleClearBoard}
        >
          Clear Board
        </Button>
      </div>

      <div className={style.parentContSecond}>
        <Avatar sx={{ bgcolor: "deepPurple" }}>R</Avatar>
      </div>
    </div>
  );
}
