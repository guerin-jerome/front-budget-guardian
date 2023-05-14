import { UseFormRegisterReturn } from "react-hook-form";

export type SelectOption = {
  value: string;
  text: string;
  disabled?: boolean;
};

export type SelectProps = {
  options: SelectOption[];
  register?: UseFormRegisterReturn;
  defaultValue?: string;
  defaultText?: string;
};
