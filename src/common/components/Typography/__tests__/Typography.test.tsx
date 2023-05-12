import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Typography } from "../Typography";

const { Title, Text, Muted, Bold } = Typography;

describe("<Typography />", () => {
  describe("<Title />", () => {
    it("level 1 - matchs snapshot", () => {
      const { container } = render(<Title level={1}>First title</Title>);
      expect(container).toMatchSnapshot();
    });

    it("level 1 - renders well", () => {
      render(<Title level={1}>First title</Title>);
      const titleText = screen.getByRole("heading", { name: "First title" });
      expect(titleText).toBeDefined();
    });

    it("level 2 - matchs snapshot", () => {
      const { container } = render(<Title level={2}>Second title</Title>);
      expect(container).toMatchSnapshot();
    });

    it("level 2 - renders well", () => {
      render(<Title level={2}>Second title</Title>);
      const titleText = screen.getByRole("heading", { name: "Second title" });
      expect(titleText).toBeDefined();
    });

    it("level 3 - matchs snapshot", () => {
      const { container } = render(<Title level={3}>Third title</Title>);
      expect(container).toMatchSnapshot();
    });

    it("level 3 - renders well", () => {
      render(<Title level={3}>Third title</Title>);
      const titleText = screen.getByRole("heading", { name: "Third title" });
      expect(titleText).toBeDefined();
    });
  });

  describe("<Text />", () => {
    it("matchs snapshot", () => {
      const { container } = render(<Text>Text</Text>);
      expect(container).toMatchSnapshot();
    });

    it("renders well", () => {
      render(<Text>Text</Text>);
      const textLibelle = screen.getByText("Text");
      expect(textLibelle).toBeDefined();
    });
  });

  describe("<Muted />", () => {
    it("matchs snapshot", () => {
      const { container } = render(<Muted>Muted</Muted>);
      expect(container).toMatchSnapshot();
    });

    it("renders well", () => {
      render(<Muted>Muted</Muted>);
      const mutedText = screen.getByText("Muted");
      expect(mutedText).toBeDefined();
    });
  });

  describe("<Bold />", () => {
    it("matchs snapshot", () => {
      const { container } = render(<Bold>Bold</Bold>);
      expect(container).toMatchSnapshot();
    });

    it("renders well", () => {
      render(<Bold>Bold</Bold>);
      const boldText = screen.getByText("Bold");
      expect(boldText).toBeDefined();
    });
  });
});
