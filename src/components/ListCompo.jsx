// import { useState } from "react";
// import {Card,CardContent,Button, TextField, IconButton} from "@material-ui/core";
// import  './Card.css';

// function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const[inputField, setInputField] =useState(false)

//   function handleClick() {
//     setInputField(true);
//   }

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "") {
//       setTasks([...tasks, inputValue]);
//       setInputValue("");
//     }
//   };
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   const handleRemoveTask = (indexToRemove) => {
//     const filteredTasks = tasks.filter(
//       (task, index) => index !== indexToRemove
//     );
//     setTasks(filteredTasks);
//   };

//   return (
//     <div className="maincard" >
//       <div style={{ display: "flex", alignItems: "center" }}>
       
//         <div style={{ display: "flex", flexWrap: "wrap" , justifyContent:"flex-start"}}>
       
//         {tasks.map((task, index) => (

//           <Card key={index} style={{ margin: "3px", position: "relative", padding:"1% 5% 0.01%" , width:'20%'}}>
             
//             <CardContent>{task}</CardContent>
//             <input  placeholder="+ Add a list" style={{ marginRight: "12px" }} onClick={handleClick} />             
//           <Button  variant="contained" color="primary" size="small" onClick={handleAddTask}> Add Card     </Button>

//             <IconButton aria-label="remove task" onClick={() => handleRemoveTask(index)} style={{ marginLeft: "10rem", top: "-15px",  right: "1px" }}>
//               X
//             </IconButton>

//           </Card>
//         ))}
//       </div>
//         <TextField style={{maxWidth: '20px', maxHeight: '20px', minWidth: '10%', minHeight: '20px'}} value={inputValue} onChange={handleInputChange} placeholder="+ Add a list" 
//           onClick={handleClick}
//         /> 
      
//        {inputField? <Button style={{ padding: "3px 3px" , marginRight:"1%"}}  variant="contained" color="primary"  onClick={handleAddTask}>
//           Add List
//         </Button>: null}
//       </div>
      
     
//     </div>
//   );
// }

// export default TodoList;