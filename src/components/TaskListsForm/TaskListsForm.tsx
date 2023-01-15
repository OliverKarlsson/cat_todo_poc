import { useEffect, useMemo, useState } from "react";
import TasksLists from "../TaskLists/TaskLists";
import TaskListsFormContext from "./TaskListsForm.context";
import {
  Task,
  TaskPlacement,
  TaskListsFormContext as TaskListsFormContextType,
  TaskListsFormProps,
} from "./TaskListsForm.types";
import TaskListsFormTemplate from "./TaskListsForm.template";
import CatPicture from "../CatPicture/CatPicture";

/**
 * The TaskListsForm component
 *
 * @param props - The component props
 * @returns The controlled TaskListsForm component.
 *
 * @beta
 */
const TaskListsForm = ({
  initialTaskLists,
  startSaveTaskLists,
}: TaskListsFormProps) => {
  const [todos, setTodos] = useState(initialTaskLists.todos);
  const [dones, setDones] = useState(initialTaskLists.dones);
  const [hasReward, setHasReward] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (hasReward) {
        setHasReward(false);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [hasReward, setHasReward]);

  const taskFormControl: Pick<
    TaskListsFormContextType,
    "addTodo" | "deleteTask" | "editTask" | "toggleTask" | "saveTaskLists"
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
        setHasReward(true);
        setDones((dones) => [...dones, taskToMove]);
        setTodos((todos) => todos.filter(({ id }) => id !== taskToMove.id));
      } else {
        setTodos((todos) => [...todos, taskToMove]);
        setDones((dones) => dones.filter(({ id }) => id !== taskToMove.id));
      }
    };

    const handleSaveTaskLists = (
      taskLists: Pick<TaskListsFormContextType, "todos" | "dones">
    ) => {
      startSaveTaskLists(taskLists);
    };

    return {
      addTodo: handleTodoAddition,
      toggleTask: handleTaskToggle,
      deleteTask: handleTaskDeletion,
      editTask: handleTaskEdit,
      saveTaskLists: handleSaveTaskLists,
    };
  }, [setTodos, setDones, startSaveTaskLists, setHasReward]);

  return (
    <TaskListsFormContext.Provider value={{ todos, dones, ...taskFormControl }}>
      <TaskListsFormTemplate
        taskLists={<TasksLists />}
        catPicture={<CatPicture isShowing={hasReward} />}
      />
    </TaskListsFormContext.Provider>
  );
};

export default TaskListsForm;
