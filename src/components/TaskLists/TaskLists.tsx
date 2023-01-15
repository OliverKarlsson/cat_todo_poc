import TaskItem from "../TaskItem/TaskItem";
import TaskListsSaver from "../TaskListsSaver/TaskListsSaver";
import useTasksFormContext from "../TaskListsForm/useTaskListsFormContext";
import TodoAdder from "../TodoAdder/TodoAdder";
import TaskListsTemplate from "./TaskLists.template";

const TaskLists = () => {
  const { todos, dones } = useTasksFormContext();

  return (
    <TaskListsTemplate
      todoAdder={<TodoAdder />}
      taskListsSaver={<TaskListsSaver />}
      todos={todos.map((todo) => (
        <TaskItem isDone={false} task={todo} />
      ))}
      dones={dones.map((todo) => (
        <TaskItem isDone task={todo} />
      ))}
    />
  );
};

export default TaskLists;
