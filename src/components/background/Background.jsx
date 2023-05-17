import React from "react";
import style from "./Background.module.css";
import { useDispatch } from "react-redux";
import { changeBackground } from "../../redux/slice";

export default function Background() {

    const dispatch = useDispatch();
    
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
        "https://images.pexels.com/photos/399160/pexels-photo-399160.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image4",
      image:
        "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image5",
      image:
        "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image6",
      image:
        "https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image7",
      image:
        "https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "image8",
      image:
        "https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  function handleBackground(index){
        let data=background[index].image
        dispatch(changeBackground({image : data}))
  }


  return (
    <div className={style.parent}>
      {background.map((item,index) => {
        return (
          <div className={style.parentimg} key={index}>
            <img onClick={()=>handleBackground(index)} className={style.backimg} src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
}
