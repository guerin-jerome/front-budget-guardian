import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { EXPENSE_TRACKING_TITLE } from "../label";
import { CurrentBudget } from "../currentBudget/CurrentBudget";
import { FIXE_BUDGET, SAVED_BUDGET, VARIABLE_BUDGET } from "@/mocks/budget";
import { BudgetTypeLibelle } from "@/entities/Budget";

describe("<ExpenseTracking />", () => {
  test("with saved budet", async () => {
    render(<CurrentBudget {...SAVED_BUDGET} />);

    const budgetName = screen.getByRole("heading", {
      name: /saved budget/i,
    });
    const typeLabel = screen.getByText(BudgetTypeLibelle.SAVED);
    const indicatorValue = screen.getByText(/100€/i);

    expect(budgetName).toBeDefined();
    expect(typeLabel).toBeDefined();
    expect(indicatorValue).toBeDefined();
  });

  test("with fixe budet", async () => {
    render(<CurrentBudget {...FIXE_BUDGET} />);

    const budgetName = screen.getByRole("heading", {
      name: /fixe budget/i,
    });
    const typeLabel = screen.getByText(BudgetTypeLibelle.FIXE);
    const indicatorValue = screen.getByText(/100€\/100€/i);

    expect(budgetName).toBeDefined();
    expect(typeLabel).toBeDefined();
    expect(indicatorValue).toBeDefined();
  });

  test("with variable budet", async () => {
    render(<CurrentBudget {...VARIABLE_BUDGET} />);

    const budgetName = screen.getByRole("heading", {
      name: /variable budget/i,
    });
    const typeLabel = screen.getByText(BudgetTypeLibelle.VARIABLE);
    const indicatorValue = screen.getByText(/5€\/100€/i);

    expect(budgetName).toBeDefined();
    expect(typeLabel).toBeDefined();
    expect(indicatorValue).toBeDefined();
  });
});
