import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonMock } from "../Button/Button.stories";
import { action } from "@storybook/addon-actions";
import TaskItem from "./TaskItem.template";
import { TaskItemTemplateProps } from "./TaskItem.types";

export default {
  title: "Components/TaskCard",
  component: TaskItem,
  argTypes: {
    onToggleTask: { action: "onToggleTask" },
    onChangeTitle: { action: "onChangeTitle" },
    onToggleEditing: { action: "onToggleEditing" },
    onSubmit: { action: "onSubmit" },
  },
  args: {
    saveButton: <ButtonMock label="save" />,
    deleteButton: <ButtonMock label="save" />,
  },
} as ComponentMeta<typeof TaskItem>;

const Template: ComponentStory<typeof TaskItem> = (args) => (
  <TaskItem {...args} />
);

export const TaskItemMock = (props: Partial<TaskItemTemplateProps>) => (
  <TaskItem
    saveButton={<ButtonMock label="save" />}
    deleteButton={<ButtonMock label="save" />}
    isDone={false}
    onChangeTitle={action("[TaskItemMock] onChangeTitle")}
    isEditing={false}
    title="editing title"
    onToggleEditing={action("[TaskItemMock] onToggleEditing")}
    task={{ title: "saved title", id: 0 }}
    onSubmit={action("[TaskItemMock] onSubmit")}
    onToggleTask={action("[TaskItemMock] onToggleTask")}
    {...props}
  />
);

export const WhenUndone = Template.bind({});
WhenUndone.args = {
  isDone: false,
  isEditing: false,
  title: "title",
  task: { title: "title2", id: 0 },
};

export const WhenDone = Template.bind({});
WhenDone.args = {
  isDone: true,
  isEditing: false,
  title: "title",
  task: { title: "title2", id: 0 },
};
