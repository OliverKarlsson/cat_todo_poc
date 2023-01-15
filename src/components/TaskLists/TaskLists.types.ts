import { ReactNode } from "react";

export interface TaskListsProps {}

export interface TaskListsTemplateProps extends TaskListsProps {
  taskListsSaver: ReactNode;
  todoAdder: ReactNode;
  todos: ReactNode;
  dones: ReactNode;
}
