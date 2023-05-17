import React from "react";
import { useState } from "react";
import styles from "./DescriptionComment.module.css";
import TocIcon from "@mui/icons-material/Toc";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function DescriptionComment() {
  const [commentData, setCommentData] = useState("");
  const [comments, setComment] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  const [activity, setActivity] = useState(false);
  const [edit, setEdit] = useState(null);
  const [toggle, setToggle] = useState(true);
  

  const date = new Date();

  const showTime =
    date.toLocaleString("default", { month: "long" }) +
    " " +
    date.getDate() +
    " at " +
    date.getHours() +
    ":" +
    date.getMinutes();

    const [time, setTime] = useState(showTime);

  const handelSave = (e) => {
    e.preventDefault();
    if (commentData === "") {
      alert("plz fill the input field");
      return;
      // setCommentData("please fill the input field")
    } else if (commentData && !toggle) {
      setComment(
        comments.map((ele) => {
          if (ele.id === edit) {
            return { ...ele, name: commentData };
          }
          return ele;
        })
      );
      setCommentData("");
      setEdit(null);
      setToggle(true);
    }
    let uniquedata = {
      id: new Date().getTime().toString(),
      name: commentData,
      time: showTime,
    };
    let data = [...comments, uniquedata];
    setComment(data);
    localStorage.setItem("comments", JSON.stringify(data));
    setCommentData("");
    setTime(time);
  };

  const handleDelete = (index) => {
    let removeData = comments.filter((ele) => {
      return index !== ele.id;
    });
    setComment(removeData);
    localStorage.setItem("comments", JSON.stringify(removeData));
  };

  const handleEdit = (id) => {
    let edittask = comments.find((ele) => {
      return ele.id === id;
    });
    console.log(edittask);
    // setComment(edittask)
    // localStorage.setItem('comments',JSON.stringify(edittask))
    setCommentData(edittask.name);
    setEdit(id);
    setToggle(false);
  };

  return (
    <>
      <div className={styles.maincontainer}>
        <TocIcon sx={{ marginTop: "1.8rem" }} />{" "}
        <h1 className={styles.activity}>Activity</h1>
        <div
          className={styles.container}
          onClick={() => setActivity(!activity)}
        >
          {activity ? (
            <button className={styles.mainbtn}>Show details</button>
          ) : (
            <button className={styles.mainbtn}>Hide Details</button>
          )}
        </div>
      </div>
      <div>
        <>
          <div className={styles.commentdata}>
            <input
              className={styles.commentinput}
              type="text"
              placeholder="Write a comment"
              value={commentData}
              onChange={(e) => setCommentData(e.target.value)}
            />
          </div>

          {toggle ? (
            <button className={styles.save} onClick={handelSave}>
              Save
            </button>
          ) : (
            <button className={styles.edit} onClick={handelSave}>
              Save edit
            </button>
          )}
        </>

        {comments.map((ele) => {
          return (
            <>
           
              <div key={ele.id} className={styles.commments}>
              <p className={styles.time}>{ele.time}</p>
                <input
                  type="text"
                  value={ele.name}
                  className={styles.commentinputs}
                />
              </div>
              <div className={styles.buttons}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ marginBottom: "1.3rem",marginTop:"-5.1rem", marginLeft: "-1.5rem" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  />
                </Stack>
                <button
                  className={styles.delete}
                  onClick={() => handleDelete(ele.id)}
                >
                  Delete
                </button>
                <button
                  className={styles.delete}
                  onClick={() => handleEdit(ele.id)}
                >
                  Edit
                </button>
               
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default DescriptionComment;
