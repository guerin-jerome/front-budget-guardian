import { TWithChildren } from "../components.type";
import "./card.css";

export const Card = ({ children }: TWithChildren) => (
  <div className="card">{children}</div>
);
