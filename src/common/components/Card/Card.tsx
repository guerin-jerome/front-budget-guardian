import { HasChildren } from "../components.type";
import "./card.css";

export const Card = ({ children }: HasChildren) => (
  <div className="card">{children}</div>
);
