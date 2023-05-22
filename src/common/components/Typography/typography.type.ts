import { PropsWithChildren } from "react";

export type TitleProps = PropsWithChildren & {
  level: 1 | 2 | 3;
};

export type BoldProps = PropsWithChildren & {
  size?: number;
};
