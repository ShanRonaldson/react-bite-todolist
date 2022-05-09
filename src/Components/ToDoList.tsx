// when need a prop create a prop interface
import { ToDo, DeleteToDo } from "../Interfaces/ToDoListInterface";
import { ToDoListTask } from "./ToDoListTask";

interface Props {
  tasks: ToDo[];
  deleteTask: DeleteToDo;
}

export const ToDoList: React.FC<Props> = ({ tasks, deleteTask }) => {

  return (
    <div className="">
      {tasks.map((task, key: number) => {
       return <ToDoListTask key={key} task={task} deleteTask={deleteTask} />
      })}
    </div>

  );
};

export default ToDoList;
