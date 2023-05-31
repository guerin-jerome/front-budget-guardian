import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BudgetForm } from "../budgetForm/BudgetForm";
import {
  BUDGET_AMOUNT_LABEL,
  BUDGET_NAME_LABEL,
  BUDGET_TYPE_LABEL,
} from "../label";

describe("<BudgetForm />", () => {
  it("should render well", () => {
    render(<BudgetForm setIsFormDisplay={() => {}} />);

    /**
     * Vérification de la présence des labels statiques
     */
    const nameLabel = screen.getByText(BUDGET_NAME_LABEL);
    const nameInput = screen.getByRole("textbox");
    const typeLabel = screen.getByText(BUDGET_TYPE_LABEL);
    const typeSelect = screen.getByRole("combobox");
    const amountLabel = screen.getByText(BUDGET_AMOUNT_LABEL);
    const amountInput = screen.getByRole("spinbutton");
    const buttons = screen.getAllByRole("button");

    expect(nameLabel).toBeDefined();
    expect(nameInput).toBeDefined();
    expect(typeLabel).toBeDefined();
    expect(typeSelect).toBeDefined();
    expect(amountLabel).toBeDefined();
    expect(amountInput).toBeDefined();
    expect(buttons.length).toEqual(2);
  });
});
