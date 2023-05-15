import  React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './Descriptioncomp.module.css'
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import Descriptions from './Descriptions';
import { useNavigate } from 'react-router-dom';
import DescriptionComment from './DescriptionComment';
import ClearIcon from '@mui/icons-material/Clear';

export default function Descriptioncomp() {
  const [open, setOpen] = useState(false);
 const[update,setUpdate]=useState("Todo Title")
const navigate=useNavigate();
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/")
  };



  return (
    <div>
      <Button onClick={handleClickOpen()}>Card Title</Button>
     
      <Dialog
        open={open}
        onClose={handleClose}
      sx={{height:"100%",width:"110%",marginTop:"1rem"}}
        >
       
        <DialogContent   sx={{backgroundColor:"##0000"}} >
        <Button sx={{marginLeft:"92%",}} onClick={handleClose}><ClearIcon /></Button>
        <span className={styles.title}><SubtitlesIcon /> <input value={update} type='text' onChange={(e)=>setUpdate(e.target.value)} className={styles.input}/> </span>
                       <p className={styles.titlepara}>in list <span style={{textDecoration:"underline",marginLeft:"3px"}}> To Do </span> <VisibilityIcon sx={{fontSize:"medium",marginLeft:"8px"}}/></p> 
            
           <Descriptions />
     
          <DescriptionComment />
         
        </DialogContent>
      
      </Dialog>
    </div>
  );
}