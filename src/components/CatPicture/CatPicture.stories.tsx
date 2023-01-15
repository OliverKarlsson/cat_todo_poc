import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonMock } from "../Button/Button.stories";
import CatPicture from "./CatPicture.template";

export default {
  title: "Components/CatPicture",
  component: CatPicture,
} as ComponentMeta<typeof CatPicture>;

const Template: ComponentStory<typeof CatPicture> = (args) => (
  <CatPicture {...args} />
);

export const CatPictureMock = () => (
  <CatPicture
    imageSrc="https://cataas.com/cat"
    closeButton={<ButtonMock label="X" />}
    isShowing
  />
);

export const Normal = Template.bind({});
Normal.args = {
  isShowing: true,
  imageSrc: "https://cataas.com/cat?v=1",
  closeButton: <ButtonMock label="X" />,
};
