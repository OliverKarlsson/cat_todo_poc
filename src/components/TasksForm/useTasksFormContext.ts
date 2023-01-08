import { useContext } from "react";
import tasksFormContext from "./TasksForm.context";

/**
 * Utility hook to access the tasksforms context.
 *
 * @beta
 */
const useTasksFormContext = () => useContext(tasksFormContext);

export default useTasksFormContext;
