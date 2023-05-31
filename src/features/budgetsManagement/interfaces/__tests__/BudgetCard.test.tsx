import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BudgetCard } from "../budgetCard/BudgetCard";
import { MOCK_BUDGET } from "@/mocks/budget";
import {
  BUDGET_CARD_AMOUNT_LABEL,
  BUDGET_CARD_NAME_LABEL,
  BUDGET_CARD_TYPE_LABEL,
} from "../label";
import { BudgetTypeLibelle } from "@/entities/Budget";

describe("<BudgetCard />", () => {
  it("should render well", () => {
    render(<BudgetCard budget={MOCK_BUDGET} />);

    /**
     * Vérification de la présence des labels statiques
     */
    const nameLabel = screen.getByText(BUDGET_CARD_NAME_LABEL);
    const typeLabel = screen.getByText(BUDGET_CARD_TYPE_LABEL);
    const amountLabel = screen.getByText(BUDGET_CARD_AMOUNT_LABEL);

    expect(nameLabel).toBeDefined();
    expect(typeLabel).toBeDefined();
    expect(amountLabel).toBeDefined();

    /**
     * Vérification de la présence des données bien formattées
     */
    const typeText = screen.getByText(BudgetTypeLibelle.VARIABLE);
    const amountText = screen.getByText("100,00 €");

    expect(typeText).toBeDefined();
    expect(amountText).toBeDefined();
  });
});
