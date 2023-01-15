import { useRef } from "react";
import Button from "../Button/Button";
import useTasksFormContext from "../TaskListsForm/useTaskListsFormContext";

const TaskListsSaver = () => {
  const { saveTaskLists, todos, dones } = useTasksFormContext();
  const initialTaskList = useRef({ todos, dones });

  return (
    <Button
      primary
      label="save task lists"
      disabled={
        initialTaskList.current.todos.every(
          (todo, index) => todo === todos[index]
        ) &&
        initialTaskList.current.dones.every(
          (done, index) => done === dones[index]
        )
      }
      onClick={() => {
        saveTaskLists({ todos, dones });
      }}
    />
  );
};

export default TaskListsSaver;
