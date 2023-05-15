import React from 'react'
import SubjectIcon from '@mui/icons-material/Subject';
import { useState } from 'react';
import styles from './Descriptions.module.css'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';


const Descriptions=()=> {
const [descriptionvalue,setDescriptionvalue]=useState("")
const [edit, setEdit] = useState(false);



const handleCancelEdit = () => {
 setEdit(!edit);
};
  return (
    <div >
     <span className={styles.container}><SubjectIcon sx={{marginTop:"1.8rem"}}/>  <h1 className={styles.head}>Description</h1> 
     {
      edit ? <AiOutlineInfoCircle style={{marginTop:"2rem",fontSize:"1.5rem",fontWeight:"600"}} />: <button className={styles.edit} onClick={() => setEdit(!edit)}>Edit</button>
      }
     </span> 
     <div className={styles.textarea}>
     <Stack spacing={1} >
        {edit && <TextField
        sx={{border:"2px solid blue",width:"90%",marginLeft:"1.5rem",height:"12rem"}}
        id="outlined-multiline-static"
          multiline
        rows="7"
    
        value={descriptionvalue}
        onChange={(e)=>setDescriptionvalue(e.target.value)}
      />
     }
      </Stack>
      {edit && <button className={styles.save} onClick={() => setEdit(!edit)}>Save</button>}
      {edit && <button className={styles.cancel} onClick={handleCancelEdit}>Cancel</button>}
      <div className={styles.descriptionContent}>
                {edit ? "" : descriptionvalue}
            </div>
        </div>
        </div>
  )
}

export default Descriptions;