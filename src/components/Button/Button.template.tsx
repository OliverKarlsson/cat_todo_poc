import style from "./Button.module.scss";
import { ButtonTemplateProps } from "./Button.types";

/**
 * The atomic buttons template component
 *
 * @param x - The component props
 * @returns The button template component.
 *
 * @beta
 */
const Button = ({
  htmlType = "button",
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
  disabled = false,
}: ButtonTemplateProps) => (
  <button
    type={htmlType}
    className={[
      style.button,
      style[`button--${size}`],
      primary ? style["button--primary"] : style["button--secondary"],
    ].join(" ")}
    style={{ backgroundColor }}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;
