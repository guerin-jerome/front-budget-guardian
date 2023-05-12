import { LabelProps } from "./label.type";
import "./label.css";

export const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor}>{children}</label>
);
