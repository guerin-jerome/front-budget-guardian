import { MouseEventHandler, ReactNode } from "react";

export enum ButtonAppearence {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SUCCESS = "success",
}

export type ButtonProps = {
  onClick: MouseEventHandler;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  appearence?: ButtonAppearence;
  className?: string;
  isIconMode?: boolean;
};
