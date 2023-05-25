import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type TextboxProps = Partial<{
  id: string;
  register: UseFormRegisterReturn;
  type: "text" | "number" | "date";
  placeholder: string;
  step: number;
  testId: string;
  hasError: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}>;
