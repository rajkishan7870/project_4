import React from 'react'
import { useState } from 'react'
import styles from './DescriptionComment.module.css'


function DescriptionComment() {
    const [commentData,setCommentData]=useState('');
    const [comments,setComment]=useState(JSON.parse(localStorage.getItem('comments')) || [])
    const [showComment,setShowComment]=useState(false)

const handelSave=(e)=>{
e.preventDefault()
let data=[...comments,commentData];
setComment(data);
localStorage.setItem('comments',JSON.stringify(data))
setCommentData('')
}

const handleDelete=(val)=>{
let removeData=comments.filter((element,index)=>{
    return  index !==val;
    
})
setComment(removeData)
localStorage.setItem('comments',JSON.stringify(removeData))
}

  return (
    <div>
        {
          showComment ? 
          <>
          <div className={styles.commentdata}> 
        <input type='text' placeholder='Write a comment' value={commentData} onChange={(e)=>setCommentData(e.target.value)} />

          </div>
           <button className={styles.save} onClick={handelSave}>Save</button>
           </>
           :
           <div > 
              <input type='text' placeholder='Write a comment...' onClick={() => setShowComment(!showComment)} className={styles.comments} />
           </div>
        }
       {
         comments.map((ele,index)=>{
            return (
            <>
            <div key={index} className={styles.commments}>
                {ele}
            </div>
           <div className={styles.buttons}>
           <button>Edit</button>
           <button onClick={()=>handleDelete(index)}>Delete</button>

           </div>
            </>

            )
         })

       }


    </div>
  )
}

export default DescriptionComment