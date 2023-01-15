import { useEffect } from "react";
import TasksForm from "./components/TaskListsForm/TaskListsForm";
import useFetchTaskLists from "./hooks/useFetchTaskLists";
import useSaveTaskLists from "./hooks/useSaveTaskLists";

const App = () => {
  const { taskLists, fetchTaskLists } = useFetchTaskLists();
  const { saveTaskLists, startSaveTaskLists } = useSaveTaskLists();

  useEffect(fetchTaskLists, [fetchTaskLists]);

  const isLoading =
    taskLists.status === "initial" ||
    taskLists.status === "loading" ||
    saveTaskLists.status === "loading";

  const hasFetchError = saveTaskLists.status === "failed";
  const hasSaveError = saveTaskLists.status === "failed";

  const isLoaded =
    !isLoading &&
    !hasFetchError &&
    !hasSaveError &&
    taskLists.status === "loaded";

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isLoaded && taskLists.response && (
        <TasksForm
          initialTaskLists={taskLists.response}
          startSaveTaskLists={startSaveTaskLists}
        />
      )}
      {isLoaded && !taskLists.response && <p>Something went horribly wrong</p>}
      {hasFetchError && (
        <p>Something went wrong when fetching the task lists</p>
      )}
      {hasSaveError && <p>Something went wrong when saving the task lists</p>}
    </>
  );
};

export default App;
