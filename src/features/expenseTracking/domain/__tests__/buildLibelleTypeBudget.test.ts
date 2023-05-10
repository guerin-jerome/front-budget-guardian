import { expect, describe, test } from "vitest";
import { FIXE_BUDGET, SAVED_BUDGET, VARIABLE_BUDGET } from "@/mocks/budget";
import { buildLibelleTypeBudget } from "../buildLibelleTypeBudget";
import { BudgetTypeLibelle } from "@/entities/Budget";

describe("buildLibelleTypeBudget()", () => {
  test("with saved budget", () => {
    expect(buildLibelleTypeBudget(SAVED_BUDGET)).toEqual(
      BudgetTypeLibelle.SAVED
    );
  });

  test("with fixe budget", () => {
    expect(buildLibelleTypeBudget(FIXE_BUDGET)).toEqual(BudgetTypeLibelle.FIXE);
  });

  test("with variable budget", () => {
    expect(buildLibelleTypeBudget(VARIABLE_BUDGET)).toEqual(
      BudgetTypeLibelle.VARIABLE
    );
  });
});
