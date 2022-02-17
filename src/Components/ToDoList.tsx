// when need a prop create a prop interface

import Button from "@mui/material/Button";
import { IToDoList } from "../Interfaces";

interface Props {
  task: IToDoList;
  deleteTask(taskNameToDelete: string): void;
}

let inputDate: string[] = [];

const ToDoList = ({ task, deleteTask }: Props) => {
  if (task.taskDate != null) {
    inputDate = task.taskDate.split("-");

    return (
      <div className="task">
        <div className="content">
          <div className="taskName">{task.taskName}</div>
          <div className="taskDate">
            {inputDate[2] + " / " + inputDate[1] + " / " + inputDate[0]}
          </div>
        </div>

        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            deleteTask(task.taskName);
          }}
        >
          X
        </Button>
      </div>
    );
  } else {
    return (
      <div className="task">
        <div className="content">
          <div className="taskName">{task.taskName}</div>
        </div>

        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            deleteTask(task.taskName);
          }}
        >
          X
        </Button>
      </div>
    );
  }
};

export default ToDoList;
