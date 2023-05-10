import { ProgressProps } from "./progress.type";
import "./progress.css";

export const Progress = ({ width }: ProgressProps) => (
  <div className="progress-bar">
    <div className="progress" style={{ width }} />
  </div>
);
