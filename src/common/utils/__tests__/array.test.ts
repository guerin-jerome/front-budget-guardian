import { expect, describe, test } from "vitest";
import { filterOnlyUnique } from "../array";

describe("filterOnlyUnique()", () => {
  test("with saved budget", () => {
    expect(filterOnlyUnique(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  test("with fixe budget", () => {
    expect(filterOnlyUnique(["a", "a", "a"])).toEqual(["a"]);
  });

  test("with fixe budget", () => {
    expect(filterOnlyUnique(["a", "a", "c"])).toEqual(["a", "c"]);
  });

  test("with variable budget", () => {
    expect(filterOnlyUnique([])).toEqual([]);
  });
});
