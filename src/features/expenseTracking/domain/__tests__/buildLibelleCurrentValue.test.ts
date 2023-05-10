import { expect, describe, test } from "vitest";
import { buildLibelleCurrentValue } from "../buildLibelleCurrentValue";
import { FIXE_BUDGET, SAVED_BUDGET, VARIABLE_BUDGET } from "@/mocks/budget";

describe("buildLibelleCurrentValue()", () => {
  test("with saved budget", () => {
    expect(buildLibelleCurrentValue(SAVED_BUDGET)).toEqual("100€");
  });

  test("with fixe budget", () => {
    expect(buildLibelleCurrentValue(FIXE_BUDGET)).toEqual("100€/100€");
  });

  test("with variable budget", () => {
    expect(buildLibelleCurrentValue(VARIABLE_BUDGET)).toEqual("5€/100€");
  });
});
