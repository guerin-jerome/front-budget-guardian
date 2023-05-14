import { TextboxProps } from "./textbox.type";
import "./textbox.css";

export const Textbox = ({
  step,
  placeholder,
  type = "text",
  register,
  testId,
}: TextboxProps) => (
  <input
    data-testid={testId}
    type={type}
    step={step}
    placeholder={placeholder}
    {...register}
  />
);
