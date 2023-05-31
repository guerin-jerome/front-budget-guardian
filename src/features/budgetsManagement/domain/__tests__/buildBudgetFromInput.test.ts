import { expect, describe, test } from "vitest";
import { buildBudgetFromInput } from "../buildBudgetFromInput";
import { BudgetType } from "@/entities/Budget";

describe("buildBudgetFromInput()", () => {
  test("cas nominal", () => {
    const inputs = {
      name: "test",
      type: BudgetType.FIXE,
      amount: "100",
    };
    const { id, name, type, base, remaining } = buildBudgetFromInput(inputs);
    expect(id).not.toBeNull();
    expect(name).toEqual("test");
    expect(type).toEqual(BudgetType.FIXE);
    expect(base).toEqual(100);
    expect(remaining).toEqual(100);
  });

  test("with saved budget", () => {
    const inputs = {
      name: "test",
      type: BudgetType.SAVED,
      amount: "10.6",
    };
    const { id, name, type, base, remaining } = buildBudgetFromInput(inputs);
    expect(id).not.toBeNull();
    expect(name).toEqual("test");
    expect(type).toEqual(BudgetType.SAVED);
    expect(base).toEqual(10.6);
    expect(remaining).toBeUndefined();
  });
});
