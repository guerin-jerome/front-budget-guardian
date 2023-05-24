import { expect, describe, test } from "vitest";
import { buildBudgetsImpactedOptions } from "../buildBudgetsImpactedOptions";
import { MOCK_BUDGETS } from "@/mocks/budget";

describe("buildBudgetsImpactedOptions()", () => {
  test("with budgets", () => {
    expect(buildBudgetsImpactedOptions(MOCK_BUDGETS)).toEqual([
      { value: "1", text: "Loisirs" },
      { value: "2", text: "Placement financier" },
      { value: "3", text: "Loyer" },
      { value: "4", text: "Courses" },
    ]);
  });

  test("with empty list", () => {
    expect(buildBudgetsImpactedOptions([])).toEqual([]);
  });
});
