import { MouseEventHandler, ReactNode } from "react";

export enum ButtonAppearence {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export type ButtonProps = Partial<{
  onClick: MouseEventHandler;
  children: ReactNode;
  type: "button" | "submit" | "reset";
  appearence: ButtonAppearence;
  className: string;
  isIconMode: boolean;
}>;
