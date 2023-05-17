import React from 'react'
import { useState } from 'react'
import styles from './DescriptionComment.module.css'
import TocIcon from '@mui/icons-material/Toc';

function DescriptionComment() {
    const [commentData,setCommentData]=useState('');
    const [comments,setComment]=useState(JSON.parse(localStorage.getItem('comments')) || [])
    const [showComment,setShowComment]=useState(false)
    const [activity,setActivity]=useState(false)

const handelSave=(e)=>{
e.preventDefault()
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
// const handleEdit=(data)=>{
// let edittask=comments.find((element,index)=>{
//   return index===data;
// })
// setComment(edittask)
// localStorage.setItem('comments',JSON.stringify(edittask))
// }


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
        {
          showComment ? 
          <>
          <div className={styles.commentdata}> 
        <input className={styles.commentinput} type='text' placeholder='Write a comment' value={commentData} onChange={(e)=>setCommentData(e.target.value)} />

          </div>
           <button className={styles.save} onClick={handelSave}>Save</button>
           </>
           :
           <div > 
              <input type='text' placeholder='Write a comment...' onClick={() => setShowComment(!showComment)} className={styles.comments} />
           </div>
        }
       {
         comments.map((ele)=>{
            return (
           <div key={ele.id} >
            <div  className={styles.commments}>
            <input type='text'  value={ele.name} className={styles.commentinputs}  />
            </div>
           <div className={styles.buttons}>
         
           <button className={styles.delete} onClick={()=>handleDelete(ele.id)}>Delete</button>
           {/* <button className={styles.delete} onClick={()=>handleEdit(index)}>Edit</button> */}

           </div>
            </div>

            )
         })

       }


    </div>
    </>
  )
}

export default DescriptionComment