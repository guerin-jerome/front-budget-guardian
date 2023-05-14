import { SelectProps } from "./select.type";
import "./select.css";

export const Select = ({
  options,
  register,
  defaultValue,
  defaultText = "Sélectionnez une valeur",
}: SelectProps) => {
  const placeholderSelect = {
    value: "initial_value",
    text: defaultText,
    disabled: true,
  };

  return (
    <select {...register} defaultValue={defaultValue}>
      {[placeholderSelect, ...options].map(({ value, text, disabled }) => (
        <option key={value} value={value} disabled={disabled}>
          {text}
        </option>
      ))}
    </select>
  );
};
