import { ProgressProps } from "./progress.type";
import classNames from "classnames";
import "./progress.css";

export const Progress = ({ width, hasError }: ProgressProps) => (
  <div className="progress-bar">
    <div
      className={classNames("progress", { error: hasError })}
      style={{ width }}
    />
  </div>
);
