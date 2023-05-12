import  React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './Descriptioncomp.module.css'
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import Description from './Description';
import DescriptionActivity from './DescriptionActivity';
import DescriptionComment from './DescriptionComment';

export default function Descriptioncomp() {
  const [open, setOpen] = useState(false);
 const[update,setUpdate]=useState("Todo Title")

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Button onClick={handleClickOpen()}>scroll=paper</Button>
     
      <Dialog
        open={open}
        onClose={handleClose}
      sx={{backgroundColor:"#091e420a"}}
        
      >
       
        <DialogContent   sx={{backgroundColor:"#091e420a"}} >
        <span className={styles.title}><SubtitlesIcon /> <input value={update} type='text' onChange={(e)=>setUpdate(e.target.value)} className={styles.input}/> </span>
                       <p className={styles.titlepara}>in list <span style={{textDecoration:"underline",marginLeft:"3px"}}> To Do </span> <VisibilityIcon sx={{fontSize:"medium",marginLeft:"8px"}}/></p> 
            
           <Description />
       <DescriptionActivity />
          <DescriptionComment />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}