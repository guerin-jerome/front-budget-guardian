import { screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { renderWithAllProviders } from "@/common/utils/test";
import { ExpenseCard } from "../expenseCard/ExpenseCard";
import { MOCK_EXPENSE, MOCK_REMOVE_EXPENSE_SAVED } from "@/mocks/expense";
import { BudgetTypeLibelle } from "@/entities/Budget";

describe("<ExpenseCard />", () => {
  test("with variable budget - added", async () => {
    renderWithAllProviders(<ExpenseCard {...MOCK_EXPENSE} />);

    const expenseValue = screen.getByText(/94,40€/i);
    const expenseDetails = screen.getByText("Details loisirs");
    const expenseDateFormatted = screen.getByText("Lundi 18 janvier 1999");
    const budgetLabel = screen.getByText("Budget :");
    const budgetValue = screen.getByText("Loisirs");
    const budgetTypeLabel = screen.getByText("Type :");
    const budgetTypeFormatted = screen.getByText(BudgetTypeLibelle.VARIABLE);

    expect(expenseValue).toBeDefined();
    expect(expenseDetails).toBeDefined();
    expect(expenseDateFormatted).toBeDefined();
    expect(budgetLabel).toBeDefined();
    expect(budgetValue).toBeDefined();
    expect(budgetTypeLabel).toBeDefined();
    expect(budgetTypeFormatted).toBeDefined();
  });

  test("with saved budget - remove", async () => {
    renderWithAllProviders(<ExpenseCard {...MOCK_REMOVE_EXPENSE_SAVED} />);

    const expenseValue = screen.getByText(/-100,00€/i);
    const expenseDetails = screen.getByText("Besoin personnel");
    const expenseDateFormatted = screen.getByText("Dimanche 5 février 2023");
    const budgetLabel = screen.getByText("Budget :");
    const budgetValue = screen.getByText("Placement financier");
    const budgetTypeLabel = screen.getByText("Type :");
    const budgetTypeFormatted = screen.getByText(BudgetTypeLibelle.SAVED);

    expect(expenseValue).toBeDefined();
    expect(expenseDetails).toBeDefined();
    expect(expenseDateFormatted).toBeDefined();
    expect(budgetLabel).toBeDefined();
    expect(budgetValue).toBeDefined();
    expect(budgetTypeLabel).toBeDefined();
    expect(budgetTypeFormatted).toBeDefined();
  });
});
