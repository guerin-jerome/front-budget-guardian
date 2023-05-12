import { CardProps } from "./card.type";
import classNames from "classnames";
import "./card.css";

export const Card = ({ children, className }: CardProps) => (
  <div className={classNames("card", className)}>{children}</div>
);
