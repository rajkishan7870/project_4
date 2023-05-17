import React from 'react'
import { useState } from 'react'
import styles from './DescriptionComment.module.css'
import TocIcon from '@mui/icons-material/Toc';

function DescriptionComment() {
    const [commentData,setCommentData]=useState('');
    const [comments,setComment]=useState(JSON.parse(localStorage.getItem('comments')) || [])

    const [activity,setActivity]=useState(false)
    const [edit,setEdit] =useState(null)
    const[toggle,setToggle]=useState(true)

const handelSave=(e)=>{
e.preventDefault()
if(commentData==="" ){
  alert("plz fill the input field")
  return;
  // setCommentData("please fill the input field")
}else if(commentData && !toggle){
  setComment(
comments.map((elem)=>{
  if(elem.id=== edit){
    return{...elem,name:commentData}
  }
  return elem;
})

  )
  setCommentData('')
setEdit(null)
setToggle(true)
}
let uniquedata={id:new Date().getTime().toString(),name:commentData}
let data=[...comments,uniquedata];
setComment(data);
localStorage.setItem('comments',JSON.stringify(data))
setCommentData('')
}

const handleDelete=(index)=>{
let removeData=comments.filter((ele)=>{
    return  index !==ele.id;
    
})
setComment(removeData)
localStorage.setItem('comments',JSON.stringify(removeData))
}

const handleEdit=(id)=>{
let edittask=comments.find((ele)=>{
  return ele.id===id;
})
console.log(edittask)
// setComment(edittask)
// localStorage.setItem('comments',JSON.stringify(edittask))
setCommentData(edittask.name)
setEdit(id)
setToggle(false)
}


  return (
    <>
    <div className={styles.maincontainer}>
        
    <TocIcon sx={{marginTop:"1.8rem"}}/>  <h1 className={styles.activity}>Activity</h1>
   <div className={styles.container} onClick={()=>setActivity(!activity)}>
 {
     activity? <button className={styles.mainbtn}>Show details</button>:<button className={styles.mainbtn}>Hide Details</button>
 }
   </div>
 </div>
    <div>
        
          <>
          <div className={styles.commentdata}> 
        <input className={styles.commentinput} type='text' placeholder='Write a comment' value={commentData} onChange={(e)=>setCommentData(e.target.value)} />

          </div>

{
  toggle ?<button className={styles.save} onClick={handelSave}>Save</button>:<button className={styles.save} onClick={handelSave}>Save edit</button>
}

           </>
       
       {
         comments.map((ele)=>{
            return (
            <>
            <div key={ele.id} className={styles.commments}>
            <input type='text'  value={ele.name} className={styles.commentinputs}  />
            </div>
           <div className={styles.buttons}>
         
           <button className={styles.delete} onClick={()=>handleDelete(ele.id)}>Delete</button>
           <button className={styles.delete} onClick={()=>handleEdit(ele.id)}>Edit</button>

           </div>
            </>

            )
         })

       }


    </div>
    </>
  )
}

export default DescriptionComment