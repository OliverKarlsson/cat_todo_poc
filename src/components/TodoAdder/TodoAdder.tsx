import { useState } from "react";
import Button from "../Button/Button";
import useTasksFormContext from "../TaskListsForm/useTaskListsFormContext";
import TodoAdderTemplate from "./TodoAdder.template";

const TodoAdder = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTasksFormContext();

  return (
    <TodoAdderTemplate
      title={title}
      onChangeTitle={setTitle}
      addButton={
        <Button
          disabled={title.length < 7}
          label="add todo"
          onClick={() => {
            addTodo(title);
            setTitle("");
          }}
        />
      }
    />
  );
};

export default TodoAdder;
