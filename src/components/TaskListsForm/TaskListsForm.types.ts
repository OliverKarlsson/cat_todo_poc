import { ReactNode } from "react";
import TaskDTO from "../../dto/Task";
import TaskLists from "../../dto/TasksLists";

export type TaskPlacement = "TODO" | "DONE";

export interface TaskListsFormContext extends TaskLists {
  addTodo: (title: string) => void;
  toggleTask: (taskToMove: Task, to: TaskPlacement) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, title: string) => void;
  saveTaskLists: (taskLists: TaskLists) => void;
}

export interface Task extends TaskDTO {}

export interface TaskListsFormProps {
  initialTaskLists: TaskLists;
  startSaveTaskLists: (taskLists: TaskLists) => void;
}

export interface TaskListsFormTemplateProps {
  taskLists: ReactNode;
  catPicture: ReactNode;
}
