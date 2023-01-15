import { useCallback, useState } from "react";
import { taskListUrl } from "../constants";
import Task from "../dto/Task";
import TaskLists from "../dto/TasksLists";

type Status = "initial" | "loading" | "loaded" | "failed";

interface Tasks {
  status: Status;
  response: null | TaskLists;
}

const isTask = (task: unknown): task is Task => {
  return true;
};

const isTaskLists = (tasks: unknown): tasks is TaskLists => {
  console.log(tasks);
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
  const [taskLists, setTaskLists] = useState<Tasks>({
    status: "initial",
    response: null,
  });

  const fetchTaskLists = useCallback(() => {
    setTaskLists({ status: "loading", response: null });
    fetch(taskListUrl)
      .then((response) => response.json())
      .then((response: unknown) => {
        if (isTaskLists(response)) {
          setTaskLists({ status: "loaded", response });
        } else {
          throw new Error("Received wrongfull response when fetching tasks.");
        }
      })
      .catch((e) => {
        console.error(e);
        setTaskLists({ status: "failed", response: null });
      });
  }, [setTaskLists]);

  return { taskLists, fetchTaskLists };
};

export default useFetchTaskLists;
