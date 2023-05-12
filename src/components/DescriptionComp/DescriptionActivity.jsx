import React from 'react'
import TocIcon from '@mui/icons-material/Toc';
import {useState} from 'react'
import styles from './DescriptionActivity.module.css'
function DescriptionActivity() {
    const [activity,setActivity]=useState(false)
  return (
    <div className={styles.maincontainer}>
        
   <TocIcon sx={{marginTop:"1.8rem"}}/>  <h1>Activity</h1>
  <div className={styles.container} onClick={()=>setActivity(!activity)}>
{
    activity? <button className={styles.mainbtn}>Show details</button>:<button className={styles.mainbtn}>Hide Details</button>
}
  </div>
</div>
    


  )
}

export default DescriptionActivity