import { SelectProps } from "./select.type";
import "./select.css";

export const Select = ({ id, name, options, onChange }: SelectProps) => (
  <select onChange={onChange} id={id} name={name}>
    {options.map(({ value, text, disabled }, index) => (
      <option key={`${value}-${index}`} value={value} disabled={disabled}>
        {text}
      </option>
    ))}
  </select>
);
