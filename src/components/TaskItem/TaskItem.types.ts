import { ReactNode } from "react";
import { Task } from "../TasksForm/TasksForm.types";

export interface TaskItemProps {
  isDone: boolean;
  onChangeTitle: () => void;
  isEditing: boolean;
  title: string;
  onToggleEditing: () => void;
  task: Task;
  onSubmit: () => void;
  onToggleTask: () => void;
}

export interface TaskItemTemplateProps extends TaskItemProps {
  saveButton: ReactNode;
  deleteButton: ReactNode;
}
