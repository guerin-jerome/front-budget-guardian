import { expect, describe, test } from "vitest";
import { formatAmount } from "../formatAmount";

describe("formatAmount()", () => {
  test("cas nominal", () => {
    expect(formatAmount(10.988)).toEqual("10,99");
  });

  test("with negative number", () => {
    expect(formatAmount(-10.988)).toEqual("-10,99");
  });

  test("with round down", () => {
    expect(formatAmount(-10.982)).toEqual("-10,98");
  });
});
