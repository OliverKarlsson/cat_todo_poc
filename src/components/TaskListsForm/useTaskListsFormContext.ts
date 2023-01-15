import { useContext } from "react";
import tasksFormContext from "./TaskListsForm.context";

/**
 * Utility hook to access the tasksforms context.
 *
 * @beta
 */
const useTaskListsFormContext = () => useContext(tasksFormContext);

export default useTaskListsFormContext;
