import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CatPictureMock } from "../CatPicture/CatPicture.stories";
import { TaskListsMock } from "../TaskLists/TaskLists.stories";
import TaskListsForm from "./TaskListsForm.template";

export default {
  title: "Components/TaskListsForm",
  component: TaskListsForm,
} as ComponentMeta<typeof TaskListsForm>;

const Template: ComponentStory<typeof TaskListsForm> = (args) => (
  <TaskListsForm {...args} />
);

export const TaskListsFormMock = () => (
  <TaskListsForm taskLists={<TaskListsMock />} catPicture={null} />
);

export const WithCatPicture = Template.bind({});
WithCatPicture.args = {
  taskLists: <TaskListsMock />,
  catPicture: <CatPictureMock />,
};

export const WithoutCatPicture = Template.bind({});
WithoutCatPicture.args = {
  taskLists: <TaskListsMock />,
  catPicture: null,
};
