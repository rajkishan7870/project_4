import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { Button, TextField, Avatar } from '@mui/material';
import Basicmenu from './Menu';
import style from './Navbar.module.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import InfoIcon from '@mui/icons-material/Info';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();
  function handleBackground(){
    navigate("/background")
  }

  return (
    <div className={style.parent}>
      <div className={style.parentContFirst}>
        <DashboardIcon />
        <Button sx={{color : "white", textTransform : "none"}}><AnalyticsIcon/>Trello</Button>
        <Basicmenu name={"Workspaces"}/>
        <Basicmenu name={"Recent"}/>
        <Basicmenu name={"Starred"}/>
        <Basicmenu name={"Templates"}/>
        <Button sx={{color : "white", textTransform : "none"}} onClick={handleBackground} >Background image</Button>

      </div>

      <div className={style.parentContSecond}>
         <TextField id="outlined-basic" placeholder= "Search" variant="outlined" size='small' 
         sx={{
          backgroundColor : "white",
         }} />
         <NotificationsActiveIcon/>
         <InfoIcon/>
         <TipsAndUpdatesIcon/>

         <Avatar sx={{ bgcolor: "deepPurple" }}>R</Avatar>
      </div>
      
    </div>
  )
}