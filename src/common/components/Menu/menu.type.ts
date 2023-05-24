import { MouseEventHandler } from "react";

export type MenuItem = {
  text: string;
  href: string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export type MenuProps = {
  items: MenuItem[];
};
