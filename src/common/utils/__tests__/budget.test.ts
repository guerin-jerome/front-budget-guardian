import { expect, describe, test } from "vitest";
import { buildLibelleTypeBudget, formatNumberToPrice } from "../budget";
import { BudgetType, BudgetTypeLibelle } from "@/entities/Budget";

describe("buildLibelleTypeBudget()", () => {
  test("with saved budget", () => {
    expect(buildLibelleTypeBudget(BudgetType.SAVED)).toEqual(
      BudgetTypeLibelle.SAVED
    );
  });

  test("with fixe budget", () => {
    expect(buildLibelleTypeBudget(BudgetType.FIXE)).toEqual(
      BudgetTypeLibelle.FIXE
    );
  });

  test("with variable budget", () => {
    expect(buildLibelleTypeBudget(BudgetType.VARIABLE)).toEqual(
      BudgetTypeLibelle.VARIABLE
    );
  });
});

describe("formatNumberToPrice()", () => {
  test("positive case", () => {
    expect(formatNumberToPrice(100)).toEqual("100,00 €");
  });

  test("negative case", () => {
    expect(formatNumberToPrice(-100)).toEqual("-100,00 €");
  });

  test("decimal case", () => {
    expect(formatNumberToPrice(100.98)).toEqual("100,98 €");
  });
});
