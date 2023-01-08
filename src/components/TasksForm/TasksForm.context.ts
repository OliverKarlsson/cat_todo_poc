import { createContext } from "react";
import { TasksFormContext } from "./TasksForm.types";

/**
 * The instance of the tasksforms context.
 *
 * @remarks
 * - Expect the initial value to be overridden.
 *
 * @beta
 */
const tasksformContext = createContext<TasksFormContext>({
  todos: [],
  dones: [],
  addTodo: function (): void {
    console.error(
      "Function not implemented since the context hasn't been provided the correct value in it's provider.\nThe function \"addTodo\" is expected to be overridden."
    );
  },
  toggleTask: function (): void {
    console.error(
      "Function not implemented since the context hasn't been provided the correct value in it's provider.\nThe function \"toggleTask\" is expected to be overridden."
    );
  },
  deleteTask: function (): void {
    console.error(
      "Function not implemented since the context hasn't been provided the correct value in it's provider.\nThe function \"deleteTask\" is expected to be overridden."
    );
  },
  editTask: function (): void {
    console.error(
      "Function not implemented since the context hasn't been provided the correct value in it's provider.\nThe function \"editTask\" is expected to be overridden."
    );
  },
});

export default tasksformContext;
