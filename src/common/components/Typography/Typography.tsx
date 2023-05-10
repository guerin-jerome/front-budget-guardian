import { HasChildren } from "../components.type";
import { TitleProps } from "./typography.type";
import "./typography.css";

const Title = ({ level, children }: TitleProps) => {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
  }
};

const Text = ({ children }: HasChildren) => <p>{children}</p>;

const Muted = ({ children }: HasChildren) => (
  <span className="muted">{children}</span>
);

const Bold = ({ children }: HasChildren) => (
  <span className="bold">{children}</span>
);

export const Typography = {
  Title,
  Text,
  Muted,
  Bold,
};
