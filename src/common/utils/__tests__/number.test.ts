import { expect, describe, test } from "vitest";
import { addition, calculatePercentageRounded } from "../number";

describe("calculatePercentageRounded()", () => {
  test("with 0 and 0", () => {
    expect(calculatePercentageRounded(0, 0)).toEqual(0);
  });

  test("with -10 and 5", () => {
    expect(calculatePercentageRounded(-10, 5)).toEqual(0);
  });

  test("with 10 and 190", () => {
    expect(calculatePercentageRounded(10, 190)).toEqual(6);
  });

  test("with 100 and 1", () => {
    expect(calculatePercentageRounded(100, 1)).toEqual(100);
  });
});

describe("addition()", () => {
  test("with 0 and 0", () => {
    expect(addition(0, 0)).toEqual(0);
  });

  test("with -10 and 5", () => {
    expect(addition(-10, 5)).toEqual(-5);
  });

  test("with 10 and 190", () => {
    expect(addition(10, 190)).toEqual(200);
  });

  test("with 100 and 1", () => {
    expect(addition(100, 1)).toEqual(101);
  });
});
