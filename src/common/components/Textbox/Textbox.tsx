import { TextboxProps } from "./textbox.type";
import classNames from "classnames";
import "./textbox.css";

export const Textbox = ({
  id,
  step,
  placeholder,
  type = "text",
  register,
  testId,
  hasError,
}: TextboxProps) => (
  <input
    id={id}
    className={classNames({ error: hasError })}
    aria-invalid={hasError}
    data-testid={testId}
    type={type}
    step={step}
    placeholder={placeholder}
    {...register}
  />
);
