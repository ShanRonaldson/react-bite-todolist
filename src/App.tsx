
import { FC, useState } from "react";
import "./App.css";
import { AddTask } from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";

import { ToDo } from "./Interfaces/ToDoListInterface";

export const App: FC = () => {

  const [tasks, setTasks] = useState<ToDo[]>([]);


  const deleteTask = (taskNameToDelete: string): void => {
    setTasks(
      tasks.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <>
      <AddTask />
      <ToDoList tasks={tasks} deleteTask={deleteTask} />

    </>
  )


};

/*
configured from https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
https://www.youtube.com/watch?v=bjnW2NLAofI

https://typeofnan.dev/your-first-react-typescript-project-todo-app/
*/
