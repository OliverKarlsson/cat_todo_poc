import ButtonTemplate from "./Button.template";
import { ButtonProps } from "./Button.types";

/**
 * The atomic button component
 *
 * @param props - The component props
 * @returns The controlled button component.
 *
 * @beta
 */
const Button = (props: ButtonProps) => <ButtonTemplate {...props} />;

export default Button;
