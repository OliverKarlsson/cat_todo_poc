import { taskListUrl } from "../constants";
import Task from "../dto/Task";
import TaskLists from "../dto/TasksLists";
import useQuery from "./useQuery";

const isTask = (task: unknown): task is Task => {
  if (typeof task !== "object" || task == null) {
    return false;
  }
  if (!("id" in task) || !("title" in task)) {
    return false;
  }
  if (!(typeof task.id === "number") || !(typeof task.title === "string")) {
    return false;
  }
  return true;
};

const isTaskLists = (tasks: unknown): tasks is TaskLists => {
  if (typeof tasks !== "object" || tasks == null) {
    return false;
  }

  if (!("todos" in tasks) || !Array.isArray(tasks.todos)) {
    return false;
  }

  if (!("dones" in tasks) || !Array.isArray(tasks.dones)) {
    return false;
  }

  if (
    tasks.todos.length &&
    tasks.todos.includes((task: unknown) => !isTask(task))
  ) {
    return false;
  }

  if (
    tasks.dones.length &&
    tasks.dones.includes((task: unknown) => !isTask(task))
  ) {
    return false;
  }

  return true;
};

/**
 * Util hook to handle fetching of task lists.
 * @returns the taskLists call state & the callback function to start fetching them
 * @beta
 */
const useFetchTaskLists = () => {
  const { callState, startFetch } = useQuery<TaskLists>(
    "task lists",
    taskListUrl,
    isTaskLists
  );

  return { taskLists: callState, fetchTaskLists: startFetch };
};

export default useFetchTaskLists;
