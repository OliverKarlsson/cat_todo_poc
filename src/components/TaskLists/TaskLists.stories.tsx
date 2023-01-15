import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonMock } from "../Button/Button.stories";
import { TaskItemMock } from "../TaskItem/TaskItem.stories";
import { TodoAdderMock } from "../TodoAdder/TodoAdder.stories";
import TaskLists from "./TaskLists.template";

export default {
  title: "Components/TaskLists",
  component: TaskLists,

  args: {
    taskListsSaver: null,
    todoAdder: <TodoAdderMock />,
  },
} as ComponentMeta<typeof TaskLists>;

const Template: ComponentStory<typeof TaskLists> = (args) => (
  <TaskLists {...args} />
);

export const TaskListsMock = () => (
  <TaskLists
    taskListsSaver={<ButtonMock primary label="Save all tasks" />}
    todoAdder={<TodoAdderMock />}
    todos={
      <>
        <TaskItemMock />
        <TaskItemMock />
        <TaskItemMock />
        <TaskItemMock />
        <TaskItemMock />
      </>
    }
    dones={
      <>
        <TaskItemMock isDone />
        <TaskItemMock isDone />
        <TaskItemMock isDone />
      </>
    }
  />
);

export const WithTodos = Template.bind({});
WithTodos.args = {
  todos: (
    <>
      <TaskItemMock />
      <TaskItemMock />
      <TaskItemMock />
      <TaskItemMock />
      <TaskItemMock />
    </>
  ),
  dones: null,
};

export const WithDones = Template.bind({});
WithDones.args = {
  todos: null,
  dones: (
    <>
      <TaskItemMock isDone />
      <TaskItemMock isDone />
      <TaskItemMock isDone />
    </>
  ),
};

export const WithTodosAndDones = Template.bind({});
WithTodosAndDones.args = {
  todos: (
    <>
      <TaskItemMock />
      <TaskItemMock />
      <TaskItemMock />
      <TaskItemMock />
      <TaskItemMock />
    </>
  ),
  dones: (
    <>
      <TaskItemMock isDone />
      <TaskItemMock isDone />
      <TaskItemMock isDone />
    </>
  ),
};

export const WithoutTasks = Template.bind({});
WithoutTasks.args = {
  todos: null,
  dones: null,
};
