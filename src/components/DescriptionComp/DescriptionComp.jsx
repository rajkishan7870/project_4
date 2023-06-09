import React from "react";
import { useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from "./Descriptioncomp.module.css";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import Descriptions from "./Descriptions";
import DescriptComment from "./DescriptComment";
import ClearIcon from "@mui/icons-material/Clear";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCard } from "../../redux/slice";
export default function Descriptioncomp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  console.log("param", params)

  const [update, setUpdate] = useState([params.id]);

  function handleClose() {
    navigate("/");
  }

  function handleSave(){
    dispatch(editCard({title : update}))
  }

  return (
    <div>
      <Card
        onClose={handleClose}
        sx={{
          backgroundColor: "#091e420a",
          width: "45%",
          marginLeft: "25%",
          marginTop: "2rem",
          boxShadow: " 5px 4px 9px grey",
        }}
      >
        <CardContent sx={{ backgroundColor: "#091e420a" }}>
          <Button sx={{ marginLeft: "92%" }} onClick={handleClose}>
            <ClearIcon />
          </Button>

          <span className={styles.title}>
            <SubtitlesIcon />{" "}
            <input
              value={update}
              type="text"
              onChange={(e) => setUpdate(e.target.value)}
              className={styles.input}
            />{" "}
            <Button onClick={handleSave} >Save</Button>
          </span>
          <p className={styles.titlepara}>
            in list{" "}
            <span style={{ textDecoration: "underline", marginLeft: "3px" }}>
              {" "}
              To Do{" "}
            </span>{" "}
            <VisibilityIcon sx={{ fontSize: "medium", marginLeft: "8px" }} />
          </p>

          <Descriptions />

          <DescriptComment />
        </CardContent>
      </Card>
    </div>
  );
}
