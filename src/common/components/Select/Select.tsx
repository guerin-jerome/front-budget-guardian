import { SelectProps } from "./select.type";
import "./select.css";

export const Select = ({ id, name, options, onChange }: SelectProps) => (
  <select onChange={onChange} id={id} name={name}>
    {options.map(({ value, text, disabled }) => (
      <option key={value} value={value} disabled={disabled}>
        {text}
      </option>
    ))}
  </select>
);
