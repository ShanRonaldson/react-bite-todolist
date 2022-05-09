import React, { FC, useState, ChangeEvent } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'


export const AddTask: React.FC = () => {

    const [priority, setPriority] = useState<string>("");

    const handlePriorityChange = (event: SelectChangeEvent): void => {
        setPriority(event.target.value);
      }
/* const [task, setTask] = useState<string>("");
  const [date, setDate] = useState<string | null>(null);
  const [priority, setPriority] = useState<string>("");
  const [todo, setToDo] = useState<ToDo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      console.log("date " + event.target.value);
      setDate(event.target.value);
    }
  };

  const handleSubmit = (): void => {
    const newToDo = { taskName: task, taskDate: date, taskPriority: priority };
    setToDo([...todo, newToDo]);
    setTask("");
    setDate(null);
  };

*/



    return (
        <div className="header">
            <div className="inputContainer">
                <TextField
                    name="task"
                    id="task"
                    placeholder="Task..."
                    rows={4}
                    multiline
                    onChange={handleChange}
                    value={task}
                />

                <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date"
                    required
                    pattern="\d{4}-\d{2}-\d{2}"
                    onChange={handleChange}
                />

                <div>
                    <select></select>
                </div>
            </div>


            <Button variant="contained" color="success" onClick={handleSubmit}>
                Add Task
            </Button>
        </div>
    )
}