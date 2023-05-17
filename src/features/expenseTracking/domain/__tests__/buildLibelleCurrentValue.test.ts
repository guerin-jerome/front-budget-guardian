import { expect, describe, test } from "vitest";
import { buildLibelleCurrentValue } from "../buildLibelleCurrentValue";
import { FIXE_BUDGET, SAVED_BUDGET, VARIABLE_BUDGET } from "@/mocks/budget";

describe("buildLibelleCurrentValue()", () => {
  test("with saved budget", () => {
    expect(buildLibelleCurrentValue(SAVED_BUDGET)).toEqual("100,00€");
  });

  test("with fixe budget", () => {
    expect(buildLibelleCurrentValue(FIXE_BUDGET)).toEqual("100,00€ / 100,00€");
  });

  test("with variable budget", () => {
    expect(buildLibelleCurrentValue(VARIABLE_BUDGET)).toEqual(
      "5,00€ / 100,00€"
    );
  });

  test("with decimal value", () => {
    const budget = { ...VARIABLE_BUDGET, remaining: 5.14, base: 12.14 };
    expect(buildLibelleCurrentValue(budget)).toEqual("5,14€ / 12,14€");
  });
});
