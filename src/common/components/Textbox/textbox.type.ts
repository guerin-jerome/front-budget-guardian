import { UseFormRegisterReturn } from "react-hook-form";

export type TextboxProps = Partial<{
  register: UseFormRegisterReturn;
  type: "text" | "number" | "date";
  placeholder: string;
  step: number;
  testId: string;
  hasError: boolean;
}>;
