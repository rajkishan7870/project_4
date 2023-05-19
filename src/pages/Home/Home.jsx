import React,{useState} from "react";
import style from "./Home.module.css";
import Navbar from "../../components/NavComp/Navbar";
import SideNav from "../../components/SideNavComp/SideNav";
import List from "../../components/HomeComp/List";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { removechild, reassign } from "../../redux/slice";


export default function Home() {
  const selector = useSelector((store) => store.listSlice.background);
  const listData = useSelector((store)=>store.listSlice.list)
  const dispatch = useDispatch();

  const dragEndHandler = (result) => {

    console.log("result",result)
    const sourceId = result?.source?.droppableId;
    const destinationId = result?.destination?.droppableId;

    let holder1 = {}
    listData.map((list) => {
      if (list.id == sourceId) {
        holder1 = list.children[result.source.index];
        dispatch(
          removechild({
            childIndex: result.source.index,
            parentId: list.id,
          })
        );
        dispatch(
          reassign({
            destination: destinationId,
            add: holder1,
            insertIndex: result.destination.index
          })
        );
      }
    });



  } 

  return (
    
    <div className={style.parent}>
      <div className={style.nav}>
        <Navbar />
      </div>
      <div className={style.content}>
        <div>
          <SideNav />
        </div>
        
        <div className={style.home}>
          <img className={selector.length>0 ? style.img : style.initial}
            src={
              selector.length > 0
                ? selector[selector.length - 1].image
                : "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
          />
         <DragDropContext onDragEnd={dragEndHandler}>
          <div className={style.card}>
            <List  />
          </div>
          
          </DragDropContext>
        </div>
     
      </div>
    </div>
    
  );
}
