import { taskListUrl } from "../constants";
import SaveTaskListsResponse from "../dto/SaveTaskListsResponse";
import TaskLists from "../dto/TasksLists";
import useCommand from "./useCommand";

const isSaveTaskListsResponse = (
  task: unknown
): task is SaveTaskListsResponse => {
  if (typeof task !== "object" || task == null) {
    return false;
  }
  if (!("id" in task) && !("errorMsg" in task)) {
    return false;
  }
  if ("id" in task && !(typeof task.id === "number")) {
    return false;
  }
  if ("errorMsg" in task && !(typeof task.errorMsg === "string")) {
    return false;
  }
  return true;
};

/**
 * Util hook to handle saving of task lists.
 * @returns the saving call state & the callback function to start saving them
 * @beta
 */
const useSaveTaskLists = () => {
  const { callState, sendCommand } = useCommand<
    TaskLists,
    SaveTaskListsResponse
  >("task lists", taskListUrl, "POST", isSaveTaskListsResponse);

  return { saveTaskLists: callState, startSaveTaskLists: sendCommand };
};

export default useSaveTaskLists;
