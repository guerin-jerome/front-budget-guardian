import { SelectProps } from "./select.type";
import classNames from "classnames";
import "./select.css";

export const Select = ({
  id,
  options,
  hasError,
  register,
  defaultValue,
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
      {...register}
      defaultValue={defaultValue}
      className={classNames({ error: hasError })}
    >
      {[placeholderSelect, ...options].map(({ value, text, disabled }) => (
        <option key={value} value={value} disabled={disabled}>
          {text}
        </option>
      ))}
    </select>
  );
};
