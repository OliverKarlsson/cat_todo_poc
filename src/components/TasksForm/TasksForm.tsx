import { useMemo, useState } from "react";
import TasksFormContext from "./TasksForm.context";
import {
  Task,
  TaskPlacement,
  TasksFormContext as TasksFormContextType,
} from "./TasksForm.types";

/**
 * The TasksForm component
 *
 * @param props - The component props
 * @returns The controlled TasksForm component.
 *
 * @beta
 */
const TasksForm = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [dones, setDones] = useState<Task[]>([]);

  const {
    addTodo,
    toggleTask,
    deleteTask,
    editTask,
  }: Pick<
    TasksFormContextType,
    "addTodo" | "deleteTask" | "editTask" | "toggleTask"
  > = useMemo(() => {
    const handleTodoAddition = (title: string) => {
      setTodos((todos) => [
        ...todos,
        {
          id: Date.now(),
          title,
        },
      ]);
    };

    const handleTaskDeletion = (id: number) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    const handleTaskEdit = (id: number, title: string) => {
      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
      );
    };

    const handleTaskToggle = (taskToMove: Task, to: TaskPlacement) => {
      if (to === "DONE") {
        setDones((dones) => [...dones, taskToMove]);
        setTodos((todos) => todos.filter(({ id }) => id !== taskToMove.id));
      } else {
        setTodos((todos) => [...todos, taskToMove]);
        setDones((dones) => dones.filter(({ id }) => id !== taskToMove.id));
      }
    };

    return {
      addTodo: handleTodoAddition,
      toggleTask: handleTaskToggle,
      deleteTask: handleTaskDeletion,
      editTask: handleTaskEdit,
    };
  }, [setTodos, setDones]);

  return (
    <TasksFormContext.Provider
      value={{ todos, dones, addTodo, toggleTask, deleteTask, editTask }}
    ></TasksFormContext.Provider>
  );
};

export default TasksForm;
