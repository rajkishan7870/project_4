import React from "react";
import { useState } from "react";
import { Button, Card, CardContent, CardActions } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from "./Descriptioncomp.module.css";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import Description from "./Descriptions";
import DescriptionComment from "./DescriptionComment";
import { Navigate, useParams } from "react-router-dom";

export default function Descriptioncomp() {
  const [update, setUpdate] = useState("");
  const params = useParams();

  function handleClose() {
    Navigate("/");
  }
  return (
    <div>
      <Card
        onClose={handleClose}
        sx={{
          backgroundColor: "#091e420a",
          width: "50%",
          marginLeft: "20%",
          paddingTop : "2%"
        }}
      >
        <CardContent sx={{ backgroundColor: "#091e420a" }}>
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

          <Description />
         
          <DescriptionComment />
        </CardContent>
        <CardActions>
          <Button onClick={handleClose}>Cancel</Button>
        </CardActions>
      </Card>
    </div>
  );
}
