import style from "./Button.module.scss";
import { ButtonTemplateProps } from "./Button.types";

/**
 * The atomic buttons template component
 *
 * @param x - The component props
 * @returns The controlled button component.
 *
 * @beta
 */
const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
}: ButtonTemplateProps) => (
  <button
    type="button"
    className={[
      style.button,
      style[`button--${size}`],
      primary ? style["button--primary"] : style["button--secondary"],
    ].join(" ")}
    style={{ backgroundColor }}
  >
    {label}
  </button>
);

export default Button;
