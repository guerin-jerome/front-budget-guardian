import { expect, describe, test } from "vitest";
import { capitalizeFirstLetter, replacePointByComma } from "../string";

describe("replacePointByComma()", () => {
  test("with 0.50", () => {
    expect(replacePointByComma("0.50")).toEqual("0,50");
  });

  test("with 100", () => {
    expect(replacePointByComma("100")).toEqual("100");
  });

  test("with undefined", () => {
    expect(replacePointByComma()).toBeUndefined();
  });

  test("with multiple points", () => {
    expect(replacePointByComma("Hello. Multiple points.")).toEqual(
      "Hello, Multiple points,"
    );
  });
});

describe("capitalizeFirstLetter()", () => {
  test("with letter", () => {
    expect(capitalizeFirstLetter("hello !")).toEqual("Hello !");
  });

  test("with number", () => {
    expect(capitalizeFirstLetter("3ello !")).toEqual("3ello !");
  });

  test("with symbol", () => {
    expect(capitalizeFirstLetter("!ello !")).toEqual("!ello !");
  });
});
