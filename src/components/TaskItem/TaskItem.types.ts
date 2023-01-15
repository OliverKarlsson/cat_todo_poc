import { ReactNode } from "react";
import { Task } from "../TaskListsForm/TaskListsForm.types";

export interface TaskItemProps {
  isDone: boolean;
  task: Task;
}

export interface TaskItemTemplateProps extends TaskItemProps {
  saveButton: ReactNode;
  deleteButton: ReactNode;
  onChangeTitle: (title: string) => void;
  isEditing: boolean;
  title: string;
  onToggleEditing: () => void;
  onSubmit: () => void;
  onToggleTask: () => void;
}
