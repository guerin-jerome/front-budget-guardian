import { TTitle } from "./typography.type";
import "./typography.css";
import { TWithChildren } from "../components.type";

const Title = ({ level, children }: TTitle) => {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
  }
};

const Text = ({ children }: TWithChildren) => <p>{children}</p>;

const Muted = ({ children }: TWithChildren) => (
  <span className="muted">{children}</span>
);

const Bold = ({ children }: TWithChildren) => (
  <span className="bold">{children}</span>
);

export const Typography = {
  Title,
  Text,
  Muted,
  Bold,
};
