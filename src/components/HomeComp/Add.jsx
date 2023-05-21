import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { addList, addCard } from "../../redux/slice";
import { useDispatch } from "react-redux";
import style from "./Add.module.css";

export default function Add({ type, cardid }) {
  const [input, setInput] = useState("");
  const [openform, setOpenform] = useState(false);
  const dispatch = useDispatch();

  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (type) {
      dispatch(addCard({ id: Math.floor(Math.random()*100), title: input, cardid: cardid }));
    } else {
   
      dispatch(addList({ id: Math.floor(Math.random()*100), title: input }));
    }
    setInput("");
  }
  function handleOpen() {
    setOpenform(true);
  }
  function handleCancel() {
    setOpenform(false);
  }
  return (
    <div className={style.parent}>
      <div className={style.add}>
        <Button
          sx={{
            textTransform: "none",
            display: "flex",
            justifyContent: "flex-start",
            borderRadius : "5px"
          }}
          size="small"
          onClick={handleOpen}
        >
          {type ? "+ Add a card" : "+ Add list"}
        </Button>
        {openform && (
          <form onSubmit={handleSubmit}>
            <TextField
              value={input}
              onChange={handleInput}
              size="small"
              placeholder={type ? "Enter new card" : "Add new list"}
            />
            <div className={style.btn}>
              <Button
                sx={{
                  textTransform: "none",
                }}
                variant="contained"
                type="submit"
              >
                {type ? "Add card" : "Add list"}
              </Button>
              <div className={style.cancel} onClick={handleCancel}>
                ❌
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
