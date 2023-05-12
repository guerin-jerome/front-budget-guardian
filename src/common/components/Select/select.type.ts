import { ChangeEventHandler } from "react";

export type SelectOption = {
  value: string;
  text: string;
  disabled?: boolean;
};

export type SelectProps = {
  id: string;
  name: string;
  options: SelectOption[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};
