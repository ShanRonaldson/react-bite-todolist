
import { FC, useState } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { ToDo } from "./Interfaces/ToDoListInterface";

export const App: FC = () => {

  const [tasks, setTasks] = useState<ToDo[]>([]);
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string | number | undefined>('');
  const [priority, setPriority] = useState<string>("");

  const deleteTask = (taskNameToDelete: string): void => {
    setTasks(
      tasks.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  const handleSubmit = (): void => {
    const newToDo = { taskName: name, taskDate: date, taskPriority: priority };
    setTasks([...tasks, newToDo]);
    setName("");
    setDate('');
    setPriority("");
  };

  return (
    <>
      <div className="header">
        <div className="inputContainer">
          <TextField
            name="taskName"
            id="taskName"
            placeholder="Task..."
            rows={4}
            multiline
            onChange={e => setName(e.target.value)}
            value={name}
          />

          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            value={date}
            onChange={e => setDate(e.target.value)}
          />

          <Box sx={{ m: 1, minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={priority}
                label="Age"
                onChange={e => setPriority(e.target.value)}
                autoWidth
              >
                <MenuItem value={'low'}>Low</MenuItem>
                <MenuItem value={'med'}>Medium</MenuItem>
                <MenuItem value={'high'}>High</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>


        <Button variant="contained" color="success" onClick={handleSubmit}>
          Add Task
        </Button>
      </div>
      <ToDoList tasks={tasks} deleteTask={deleteTask} />

    </>
  )


};

/*
configured from https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
https://www.youtube.com/watch?v=bjnW2NLAofI

https://typeofnan.dev/your-first-react-typescript-project-todo-app/
*/
