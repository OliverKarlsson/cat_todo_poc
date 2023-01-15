import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TodoAdder from "./TodoAdder.template";
import { TodoAdderTemplateProps } from "./TodoAdder.types";
import { ButtonMock } from "../Button/Button.stories";

export default {
  title: "Components/TodoAdder",
  component: TodoAdder,
} as ComponentMeta<typeof TodoAdder>;

const Template: ComponentStory<typeof TodoAdder> = (args) => (
  <TodoAdder {...args} />
);

export const TodoAdderMock = (props: Partial<TodoAdderTemplateProps>) => (
  <TodoAdder
    title=""
    onChangeTitle={action("[TodoAdder] onChangeTitle")}
    addButton={<ButtonMock label="add todo" />}
    {...props}
  />
);

export const Normal = Template.bind({});
Normal.args = {
  title: "",
  addButton: <ButtonMock label="add todo" />,
  onChangeTitle: action("onChangeTitle"),
};
