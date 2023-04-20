import { TProgress } from "./progress.type";
import "./progress.css";

export const Progress = ({ width }: TProgress) => (
  <div className="progress-bar">
    <div className="progress" style={{ width }} />
  </div>
);
