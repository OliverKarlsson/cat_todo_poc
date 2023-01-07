import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button.template";
import { ButtonTemplateProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonMock = (props: Partial<ButtonTemplateProps>) => (
  <Button label="mocked button" {...props} />
);

export const WhenPrimary = Template.bind({});
WhenPrimary.args = {
  primary: true,
  label: "Button",
};

export const WhenSecondary = Template.bind({});
WhenSecondary.args = {
  label: "Button",
};

export const WhenLarge = Template.bind({});
WhenLarge.args = {
  size: "large",
  label: "Button",
};

export const WhenSmall = Template.bind({});
WhenSmall.args = {
  size: "small",
  label: "Button",
};
