import { UseFormRegisterReturn } from "react-hook-form";

export type SelectOption = {
  value: string;
  text: string;
  disabled?: boolean;
};

export type SelectProps = {
  id?: string;
  options: SelectOption[];
  hasError?: boolean;
  register?: UseFormRegisterReturn;
  defaultValue?: string;
  isDefaultDisabled?: boolean;
  defaultText?: string;
};
