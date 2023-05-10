import { expect, describe, test } from "vitest";
import { repalcePointByComma } from "../string";

describe("repalcePointByComma()", () => {
  test("with 0.50", () => {
    expect(repalcePointByComma("0.50")).toEqual("0,50");
  });

  test("with 100", () => {
    expect(repalcePointByComma("100")).toEqual("100");
  });
});
