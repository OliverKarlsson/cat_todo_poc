import { createContext } from "react";
import { TaskListsFormContext } from "./TaskListsForm.types";

/**
 * The instance of the tasksforms context.
 *
 * @remarks
 * - Expect the initial value to be overridden.
 *
 * @beta
 */
const tasksformContext = createContext<TaskListsFormContext>({
  todos: [],
  dones: [],
  addTodo: () => {
    console.error(
      "Function not implemented since the context hasn't been provided the correct value in it's provider.\nThe function \"addTodo\" is expected to be overridden."
    );
  },
  toggleTask: () => {
    console.error(
      "Function not implemented since the context hasn't been provided the correct value in it's provider.\nThe function \"toggleTask\" is expected to be overridden."
    );
  },
  deleteTask: () => {
    console.error(
      "Function not implemented since the context hasn't been provided the correct value in it's provider.\nThe function \"deleteTask\" is expected to be overridden."
    );
  },
  editTask: () => {
    console.error(
      "Function not implemented since the context hasn't been provided the correct value in it's provider.\nThe function \"editTask\" is expected to be overridden."
    );
  },
  saveTaskLists: () => {
    console.error(
      "Function not implemented since the context hasn't been provided the correct value in it's provider.\nThe function \"saveTaskLists\" is expected to be overridden."
    );
  },
});

export default tasksformContext;
