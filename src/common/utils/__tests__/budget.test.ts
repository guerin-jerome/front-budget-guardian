import { expect, describe, test } from "vitest";
import { buildLibelleTypeBudget } from "../budget";
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
