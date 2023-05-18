import React from "react";
import style from "./Background.module.css";
import { useDispatch } from "react-redux";
import { changeBackground } from "../../redux/slice";
import { useNavigate } from "react-router";

export default function Background() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const background = [
    {
      name: "image1",
      image:
        "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image2",
      image:
        "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image3",
      image:
        "https://images.pexels.com/photos/713644/pexels-photo-713644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "image4",
      image:
        "https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image5",
      image:
        "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image6",
      image:
        "https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image7",
      image:
        "https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image8",
      image:
        "https://images.pexels.com/photos/14833456/pexels-photo-14833456.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image9",
      image:
        "https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image10",
      image:
        "https://images.pexels.com/photos/531910/pexels-photo-531910.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image11",
      image:
        "https://images.pexels.com/photos/1091014/pexels-photo-1091014.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  function handleBackground(index) {
    let data = background[index].image;
    dispatch(changeBackground({ image: data }));
    navigate("/");
  }

  return (
    <div className={style.parent}>
      {background.map((item, index) => {
        return (
          <div className={style.parentimg} key={index}>
            <img
              onClick={() => handleBackground(index)}
              className={style.backimg}
              src={item.image}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
