import { screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { CurrentBudget } from "../currentBudget/CurrentBudget";
import { FIXE_BUDGET, SAVED_BUDGET, VARIABLE_BUDGET } from "@/mocks/budget";
import { BudgetTypeLibelle } from "@/entities/Budget";
import { renderWithAllProviders } from "@/common/utils/test";

describe("<ExpenseTracking />", () => {
  test("with saved budet", async () => {
    renderWithAllProviders(<CurrentBudget {...SAVED_BUDGET} />);

    const budgetName = screen.getByRole("heading", {
      name: /saved budget/i,
    });
    const typeText = screen.getByText(BudgetTypeLibelle.SAVED);
    const indicatorValue = screen.getByText(/100,00€/i);

    expect(budgetName).toBeDefined();
    expect(typeText).toBeDefined();
    expect(indicatorValue).toBeDefined();
  });

  test("with fixe budet", async () => {
    renderWithAllProviders(<CurrentBudget {...FIXE_BUDGET} />);

    const budgetName = screen.getByRole("heading", {
      name: /fixe budget/i,
    });
    const typeText = screen.getByText(BudgetTypeLibelle.FIXE);
    const indicatorValue = screen.getByText(/100,00€ \/ 100,00€/i);

    expect(budgetName).toBeDefined();
    expect(typeText).toBeDefined();
    expect(indicatorValue).toBeDefined();
  });

  test("with variable budet", async () => {
    renderWithAllProviders(<CurrentBudget {...VARIABLE_BUDGET} />);

    const budgetName = screen.getByRole("heading", {
      name: /variable budget/i,
    });
    const typeText = screen.getByText(BudgetTypeLibelle.VARIABLE);
    const indicatorValue = screen.getByText(/5,00€ \/ 100,00€/i);

    expect(budgetName).toBeDefined();
    expect(typeText).toBeDefined();
    expect(indicatorValue).toBeDefined();
  });
});
