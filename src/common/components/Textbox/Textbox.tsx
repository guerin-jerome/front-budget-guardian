import { TextboxProps } from "./textbox.type";
import "./textbox.css";

export const Textbox = ({
  id,
  name,
  onChange,
  step,
  placeholder,
  type = "text",
}: TextboxProps) => (
  <input
    onChange={onChange}
    id={id}
    name={name}
    type={type}
    step={step}
    placeholder={placeholder}
  />
);
