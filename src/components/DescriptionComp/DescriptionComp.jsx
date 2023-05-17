import React from "react";
import { useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from "./Descriptioncomp.module.css";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import Descriptions from "./Descriptions";
import DescriptionComment from "./DescriptionComment";
import ClearIcon from '@mui/icons-material/Clear';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Descriptioncomp() {
  const navigate=useNavigate()
  const [update, setUpdate] = useState("");
  const params = useParams();

  function handleClose() {
    navigate("/");
  }
  return (
    <div>
      <Card
        onClose={handleClose}
        sx={{
          backgroundColor: "#091e420a",
          width: "40%",
          marginLeft: "25%",
          marginTop:"2rem"
        }}
      >
        <CardContent sx={{ backgroundColor: "#091e420a" }}>
        <Button sx={{marginLeft:"92%",}} onClick={handleClose}><ClearIcon /></Button>

          <span className={styles.title}>
            <SubtitlesIcon />{" "}
            <input
              value={params.id}
              type="text"
              onChange={(e) => setUpdate(e.target.value)}
              className={styles.input}
            />{" "}
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
        
          <DescriptionComment />
        </CardContent>
 
      </Card>
    </div>
  );
}
