import { SelectProps } from "./select.type";
import classNames from "classnames";
import "./select.css";

export const Select = ({
  id,
  options,
  hasError,
  register,
  defaultValue,
  onChange,
  isDefaultDisabled = true,
  defaultText = "Sélectionnez une valeur",
}: SelectProps) => {
  const placeholderSelect = {
    value: "initial_value",
    text: defaultText,
    disabled: isDefaultDisabled,
  };

  return (
    <select
      id={id}
      onChange={onChange}
      defaultValue={defaultValue}
      className={classNames({ error: hasError })}
      {...register}
    >
      {[placeholderSelect, ...options].map(({ value, text, disabled }) => (
        <option key={value} value={value} disabled={disabled}>
          {text}
        </option>
      ))}
    </select>
  );
};
