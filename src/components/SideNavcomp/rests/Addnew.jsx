import React, { useState } from "react";
import style from "./rest.module.css";
import { useDispatch } from "react-redux";
import { addlist } from "../../../store/listSlice";

export default function Addnew() {
  const [valinput, setvalinput] = useState("");

  const [isformvis, setisformvis] = useState(false);
  const disp = useDispatch();

  const submitfunc = (e) => {
    e.preventDefault();
    // console.log(valinput);

    disp(
      addlist({
        // id: Math.random().toFixed(2),
        title: valinput,
      })
    );
    console.log("madhu");
    setvalinput("");
  };

  const inputchange = (e) => {
    setvalinput(e.target.value);
  };
  const formvis = () => {
    // setisformvis(true)
    setisformvis(!isformvis);
  };
  const closeform = () => {
    setisformvis(false);
  };
  return (
    <div>
      <button onClick={formvis}>+add new</button>
      {isformvis && (
        <form onSubmit={submitfunc}>
          <input value={valinput} onChange={inputchange} />
          <button onClick={submitfunc}>save</button>
          <button onClick={closeform}>X</button>
        </form>
      )}
    </div>
  );
}
