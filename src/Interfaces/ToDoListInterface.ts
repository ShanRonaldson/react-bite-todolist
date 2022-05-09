export interface ToDo {
    taskName: string;
    taskDate: string | undefined | number;
    taskPriority: string;
}

export type DeleteToDo = (selectedTask: string) => void;

export type handleSubmit = () => void;