import { test, describe, expect } from "vitest";
import { renderWithAllProviders } from "@/common/utils/test";
import { HeaderHistory } from "../headerHistory/HeaderHistory";
import { screen } from "@testing-library/react";
import {
  BUDGET_IMPACTED_SELECT_LABEL,
  BUDGET_TYPE_SELECT_LABEL,
  DETAILS_INPUT_LABEL,
  SORT_ORDER_BUDGET_DATE_LABEL,
} from "../label";

describe("<HeaderHistory />", () => {
  test("vue initiale", () => {
    renderWithAllProviders(<HeaderHistory />);

    const detailsInput = screen.getByRole("textbox", {
      name: DETAILS_INPUT_LABEL,
    });
    const budgetImpactedSelect = screen.getByRole("combobox", {
      name: BUDGET_IMPACTED_SELECT_LABEL,
    });
    const budgetTypeSelect = screen.getByRole("combobox", {
      name: BUDGET_TYPE_SELECT_LABEL,
    });
    const sortOrderBudgetDateSelect = screen.getByRole("combobox", {
      name: SORT_ORDER_BUDGET_DATE_LABEL,
    });
    const resetButton = screen.getByRole("button");

    expect(detailsInput).toBeDefined();
    expect(budgetImpactedSelect).toBeDefined();
    expect(budgetTypeSelect).toBeDefined();
    expect(sortOrderBudgetDateSelect).toBeDefined();
    expect(resetButton).toBeDefined();
  });
});
