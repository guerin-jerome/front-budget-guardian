import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Progress } from "../Progress";

describe("<Progress />", () => {
  it("matchs snapshot", () => {
    const { container } = render(<Progress hasError={false} width="10%" />);
    expect(container).toMatchSnapshot();
  });

  it("with error", () => {
    const { container } = render(<Progress hasError={true} width="10%" />);
    expect(container).toMatchSnapshot();
  });
});
