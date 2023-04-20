import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ViewCurrentBudget } from "../ViewCurrentBudget";
import { MOCK_BUDGET, MOCK_BUDGET_SAVED } from "../../../../mocks/budget.mock";
import { EBudgetType } from "../../../../common/constants/budget";

describe("<ViewCurrentBudget />", () => {
  it("matchs snapshot", () => {
    const { container } = render(<ViewCurrentBudget {...MOCK_BUDGET} />);
    expect(container).toMatchSnapshot();
  });

  it("renders well - budget variable", () => {
    render(<ViewCurrentBudget {...MOCK_BUDGET} />);
    const budgetName = screen.getByRole("heading", { name: "Loisirs" });
    const budgetType = screen.getByText(EBudgetType.VARIABLE);
    const budgetCurrentValue = screen.getByText("5,6€/100€");
    expect(budgetName).toBeDefined();
    expect(budgetType).toBeDefined();
    expect(budgetCurrentValue).toBeDefined();
  });

  it("renders well - budget saved", () => {
    render(<ViewCurrentBudget {...MOCK_BUDGET_SAVED} />);
    const budgetName = screen.getByRole("heading", {
      name: "Placement financier",
    });
    const budgetType = screen.getByText(EBudgetType.SAVED);
    const budgetCurrentValue = screen.getByText("200€");
    expect(budgetName).toBeDefined();
    expect(budgetType).toBeDefined();
    expect(budgetCurrentValue).toBeDefined();
  });
});
