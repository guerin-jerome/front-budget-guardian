import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BudgetsManagement } from "../BudgetsManagement";
import { renderWithAllProviders } from "@/common/utils/test";
import userEvent from "@testing-library/user-event";
import { BUDGET_NAME_LABEL } from "../label";
import { BudgetTypeLibelle } from "@/entities/Budget";

describe("<BudgetsManagement />", () => {
  it("should remove budget", async () => {
    renderWithAllProviders(<BudgetsManagement />);

    /**
     * Vérification de la présence d'un budget avant sa suppression
     */
    const budgetLoisirName = screen.getByText("Loisirs");
    const budgetLoisirAMount = screen.getByText("100,00 €");

    expect(budgetLoisirName).toBeDefined();
    expect(budgetLoisirAMount).toBeDefined();

    /**
     * Suppression du budget
     */
    const buttons = screen.getAllByRole("button");
    const [_, removeBudgetButton] = buttons;

    await userEvent.click(removeBudgetButton);

    expect(screen.queryByText("Loisirs")).toBeNull();
    expect(screen.queryByText("100,00 €")).toBeNull();
  });

  it("should add budget", async () => {
    renderWithAllProviders(<BudgetsManagement />);

    /**
     * Vérification de la non-présence du formulaire et d'un budget
     */
    expect(screen.queryByText(BUDGET_NAME_LABEL)).toBeNull();
    expect(screen.queryByText("Budget test")).toBeNull();
    expect(screen.queryByText("7,00 €")).toBeNull();

    /**
     * Ajout du budget
     */
    const buttons = screen.getAllByRole("button");
    const [addBudgetButton] = buttons;

    await userEvent.click(addBudgetButton);

    const budgetNameLabel = screen.getByText(BUDGET_NAME_LABEL);
    expect(budgetNameLabel).toBeDefined();

    const budgetNameInput = screen.getByRole("textbox");
    const budgetTypeSelect = screen.getByRole("combobox");
    const budgetAmountInput = screen.getByRole("spinbutton");

    await userEvent.type(budgetNameInput, "Budget test");
    await userEvent.selectOptions(budgetTypeSelect, BudgetTypeLibelle.FIXE);
    await userEvent.type(budgetAmountInput, "7");

    const allButtons = screen.getAllByRole("button");
    const [submitFormButton] = allButtons;

    await userEvent.click(submitFormButton);

    /**
     * Vérification de l'ajout du budget
     */
    const budgetTestName = screen.getByText("Budget test");
    const budgetTestAmount = screen.getByText("7,00 €");

    expect(budgetTestName).toBeDefined();
    expect(budgetTestAmount).toBeDefined();
  });

  it("should open and close budget form", async () => {
    renderWithAllProviders(<BudgetsManagement />);

    /**
     * Vérification de la non-présence du formulaire
     */
    expect(screen.queryByText(BUDGET_NAME_LABEL)).toBeNull();

    /**
     * Ouvrir le formulaire
     */
    const buttons = screen.getAllByRole("button");
    const [addBudgetButton] = buttons;

    await userEvent.click(addBudgetButton);

    /**
     * Vérification de la présence du formulaire
     */
    const budgetNameLabel = screen.getByText(BUDGET_NAME_LABEL);

    expect(budgetNameLabel).toBeDefined();

    /**
     * Fermer le formulaire
     */
    const allButtons = screen.getAllByRole("button");
    const [_, closeFormButton] = allButtons;

    await userEvent.click(closeFormButton);

    expect(screen.queryByText(BUDGET_NAME_LABEL)).toBeNull();
  });
});
