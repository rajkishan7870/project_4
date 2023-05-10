import { useState } from "react";
import {Card,CardContent,Button, TextField, IconButton} from "@material-ui/core";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const[inputField, setInputField] =useState(false)

  function handleClick() {
    setInputField(true);
  }

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleRemoveTask = (indexToRemove) => {
    const filteredTasks = tasks.filter(
      (task, index) => index !== indexToRemove
    );
    setTasks(filteredTasks);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <input placeholder='+ add task' onClick={handleClick}/> */}
        <div style={{ display: "flex", flexWrap: "wrap" , justifyContent:"flex-start"}}>
       
        {tasks.map((task, index) => (
          <Card key={index} style={{ margin: "5px", position: "relative", padding:"1% 3% 0.01%" , width:'25%'}}>
             
            <CardContent>{task}</CardContent>
            <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="+ Add a list"
          style={{ marginRight: "12px" }} 
          onClick={handleClick}
        /> 
          <Button variant="contained" color="primary" size="small" onClick={handleAddTask}>
          Add Card
        </Button>

            <IconButton aria-label="remove task" onClick={() => handleRemoveTask(index)}
              style={{position: "relative", marginLeft: "15rem", top: "-60px",  right: "5px" }}>
              X
            </IconButton>

          </Card>
        ))}
      </div>
        <TextField
          value={inputValue}
          onChange={handleInputChange}
          placeholder="+ Add a list"
          style={{ marginRight: "12px" }} 
          onClick={handleClick}
        /> 
      
       {inputField? <Button variant="contained" color="primary"  size="small" onClick={handleAddTask}>
          Add Another List
        </Button>: null}
      </div>
      
     
    </div>
  );
}

export default TodoList;
