import { ButtonAppearence, ButtonProps } from "./button.type";
import classNames from "classnames";
import "./button.css";

export const Button = ({
  children,
  className,
  isIconMode,
  type = "button",
  appearence = ButtonAppearence.PRIMARY,
  onClick = () => {},
}: ButtonProps) => (
  <button
    className={classNames(className, appearence, { icon: isIconMode })}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);
