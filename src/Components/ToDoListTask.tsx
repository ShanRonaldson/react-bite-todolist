import { DeleteToDo, ToDo } from "../Interfaces/ToDoListInterface"
import Button from "@mui/material/Button";

interface Props {
    task: ToDo;
    deleteTask: DeleteToDo;
}


export const ToDoListTask: React.FC<Props> = ({ task, deleteTask }) => {
    return (
        <div className="task">
            <div className="content">
                <div className="taskName">{task.taskName}</div>
                <div className="taskDate">{(task.taskDate != null) ? task.taskDate : ''}</div>
                <div className="taskPriority">{task.taskPriority}</div>
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

    )
}



/*     <div>
      {tasks.map((task) => (
        <ToDoListTask key={key} task={task} />
      ))}
    </div>  */
/*  */