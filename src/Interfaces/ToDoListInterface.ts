export interface ToDo {
    taskName: string;
    taskDate: string | null;
    taskPriority: string;
}

export type DeleteToDo = (selectedTask: string) => void;