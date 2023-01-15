import { useState } from "react";
import Button from "../Button/Button";
import useTasksFormContext from "../TaskListsForm/useTaskListsFormContext";
import TaskItemTemplate from "./TaskItem.template";
import { TaskItemProps } from "./TaskItem.types";

/**
 * The atomic button component
 *
 * @param props - The component props
 * @returns The controlled button component.
 *
 * @beta
 */
const TaskItem = ({ task, isDone }: TaskItemProps) => {
  const { deleteTask, editTask, toggleTask } = useTasksFormContext();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = () => {
    if (title.length > 6) {
      editTask(task.id, title);
      setIsEditing(false);
    }
  };

  return (
    <TaskItemTemplate
      saveButton={<Button label="Save" htmlType="submit" />}
      deleteButton={
        <Button label="Delete" onClick={() => deleteTask(task.id)} />
      }
      isDone={isDone}
      onChangeTitle={setTitle}
      isEditing={isEditing}
      title={title}
      onToggleEditing={handleToggleEdit}
      task={task}
      onSubmit={handleSubmit}
      onToggleTask={() => toggleTask(task, isDone ? "TODO" : "DONE")}
    />
  );
};

export default TaskItem;
