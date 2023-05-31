import { expect, test } from "vitest";
import { buildSelectOptionsBudgetType } from "../buildSelectOptionsBudgetType";

test("buildSelectOptionsBudgetType()", () => {
  expect(buildSelectOptionsBudgetType()).toEqual([
    { value: "FIXE", text: "Dépense fixe" },
    { value: "VARIABLE", text: "Dépense variable" },
    { value: "SAVED", text: "Épargne" },
  ]);
});
