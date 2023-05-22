import { expect, describe, test } from "vitest";
import { formatDate } from "../formatDate";

describe("formatDate()", () => {
  test("cas nominal", () => {
    expect(formatDate("1999-01-18")).toEqual("Lundi 18 janvier 1999");
  });
});
