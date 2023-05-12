import { expect, describe, test } from "vitest";
import {
  SELECT_BUDGET_IMPACTED_PLACEHOLDER,
  buildBudgetsImpactedOptions,
} from "../buildBudgetsImpactedOptions";
import { MOCK_BUDGETS } from "@/mocks/budget";

describe("buildBudgetsImpactedOptions()", () => {
  test("with budgets", () => {
    expect(buildBudgetsImpactedOptions(MOCK_BUDGETS)).toEqual([
      SELECT_BUDGET_IMPACTED_PLACEHOLDER,
      { value: "1", text: "Loisirs" },
      { value: "2", text: "Placement financier" },
      { value: "3", text: "Loyer" },
      { value: "4", text: "Courses" },
    ]);
  });

  test("with empty list", () => {
    expect(buildBudgetsImpactedOptions([])).toEqual([
      SELECT_BUDGET_IMPACTED_PLACEHOLDER,
    ]);
  });
});
