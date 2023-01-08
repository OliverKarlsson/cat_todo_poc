export type TaskPlacement = "TODO" | "DONE";

export interface TasksFormContext {
  todos: Task[];
  dones: Task[];
  addTodo: (title: string) => void;
  toggleTask: (taskToMove: Task, to: TaskPlacement) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, title: string) => void;
}

export interface Task {
  id: number;
  title: string;
}
