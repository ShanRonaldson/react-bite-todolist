// when need a prop create a prop interface

import Button from "@mui/material/Button";
import { IToDoList } from "../Interfaces";

interface Props {
  task: IToDoList;
}

const ToDoList = ({ task }: Props) => {
  return (
    <div className="task">
      <div className="taskName">{task.taskName}</div>

      <div className="taskDate">{task.taskDate}</div>
      <Button variant="outlined" color="error">
        Complete
      </Button>
    </div>
  );
};

export default ToDoList;
