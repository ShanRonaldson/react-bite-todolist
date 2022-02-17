import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList";

import { IToDoList } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [date, setDate] = useState<string | null>(null);
  const [todo, setToDo] = useState<IToDoList[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      console.log("date " + event.target.value);
      setDate(event.target.value);
    }
  };

  const handleSubmit = (): void => {
    const newToDo = { taskName: task, taskDate: date };
    setToDo([...todo, newToDo]);
    setTask("");
    setDate(null);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setToDo(
      todo.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
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
        </div>

        <Button variant="contained" color="success" onClick={handleSubmit}>
          Add Task
        </Button>
      </div>
      <div className="todoList">
        {todo.map((task: IToDoList, key: number) => {
          return <ToDoList key={key} task={task} deleteTask={deleteTask}/>;
        })}
      </div>
    </div>
  );
};

export default App;

/*
configured from https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
https://www.youtube.com/watch?v=bjnW2NLAofI
*/
