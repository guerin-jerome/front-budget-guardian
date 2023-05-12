import { ChangeEventHandler } from "react";

export type TextboxProps = {
  id: string;
  name: string;
  onChange: ChangeEventHandler;
  type?: "text" | "number";
  step?: number;
  placeholder?: string;
};
