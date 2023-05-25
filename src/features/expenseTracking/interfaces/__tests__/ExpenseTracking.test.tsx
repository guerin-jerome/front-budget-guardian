import { screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import { ExpenseTracking } from "../ExpenseTracking";
import { EXPENSE_DETAILS_LABEL, TOTAL_REMAINING_TITLE_SECTION } from "../label";
import { renderWithAllProviders } from "@/common/utils/test";
import userEvent from "@testing-library/user-event";

export const formFillingScenario = async (
  details?: string,
  budgetImpacted?: string,
  date?: string,
  amount?: string
) => {
  if (details) {
    const textboxDetails = screen.getByRole("textbox");
    await userEvent.type(textboxDetails, details);
    expect(textboxDetails).toBeDefined();
  }

  if (budgetImpacted) {
    const selectBudgetImpacted = screen.getByRole("combobox");
    await userEvent.selectOptions(selectBudgetImpacted, budgetImpacted);
    expect(selectBudgetImpacted).toBeDefined();
  }

  if (date) {
    const datepicker = screen.getByTestId("date-input-expense");
    await userEvent.clear(datepicker);
    await userEvent.type(datepicker, date);
    expect(datepicker).toBeDefined();
  }

  if (amount) {
    const textboxAmount = screen.getByRole("spinbutton");
    await userEvent.type(textboxAmount, amount);
    expect(textboxAmount).toBeDefined();
  }
};

describe("<ExpenseTracking />", () => {
  test("vue initiale", () => {
    renderWithAllProviders(<ExpenseTracking />);

    const totalRemainingTitle = screen.getByText(
      TOTAL_REMAINING_TITLE_SECTION,
      {
        exact: false,
      }
    );
    const totalRemaining = screen.findByText(/615,60 €/i);
    const buttons = screen.getAllByRole("button");

    expect(totalRemainingTitle).toBeDefined();
    expect(totalRemaining).toBeDefined();
    expect(buttons.length).toEqual(3);
  });

  test("reset budgets", async () => {
    renderWithAllProviders(<ExpenseTracking />);

    const totalRemaining = await screen.findByText(/615,60 €/i);
    const budgetName = screen.getAllByText(/loisirs/i);
    const budgetType = screen.getAllByText(/dépense variable/i);
    const budgetCurrentValue = screen.getByText("5,60€ / 100,00€");
    const buttons = screen.getAllByRole("button");
    const resetButton = buttons[2];

    expect(totalRemaining).toBeDefined();
    expect(budgetName).toBeDefined();
    expect(budgetType).toBeDefined();
    expect(budgetCurrentValue).toBeDefined();
    expect(resetButton).toBeDefined();

    await userEvent.click(resetButton);

    const totalRemainingAfterReset = await screen.findByText(/835,00 €/i);
    const budgetLoisirRemaining = screen.getByText(/100,00€ \/ 100,00€/i);

    expect(totalRemainingAfterReset).toBeDefined();
    expect(budgetLoisirRemaining).toBeDefined();
  });

  test("formulaire budget - manque d'infos and cancel", async () => {
    renderWithAllProviders(<ExpenseTracking />);

    const totalRemaining = await screen.findByText(/615,60 €/i);
    const actionsButtons = screen.getAllByRole("button");
    const addButton = actionsButtons[0];

    expect(totalRemaining).toBeDefined();
    expect(addButton).toBeDefined();

    await userEvent.click(addButton);

    const buttons = screen.getAllByRole("button");
    const detailsLabel = screen.getByText(EXPENSE_DETAILS_LABEL);
    expect(buttons.length).toEqual(2);
    expect(detailsLabel).toBeDefined();
    const validateButton = buttons[0];
    const cancelButton = buttons[1];

    await userEvent.click(validateButton);

    const totalRemainingNotUpdated = await screen.findByText(/615,60 €/i);
    expect(totalRemainingNotUpdated).toBeDefined();

    await userEvent.click(cancelButton);

    const actionsButtonsReappear = screen.getAllByRole("button");
    expect(actionsButtonsReappear.length).toEqual(3);
    expect(screen.queryByText(EXPENSE_DETAILS_LABEL)).toBeNull();
  });

  test("formulaire budget - ajout dépense dans budget", async () => {
    renderWithAllProviders(<ExpenseTracking />);

    const actionsButtons = screen.getAllByRole("button");
    const removeButton = actionsButtons[0];
    const budgetCurrentValue = screen.getByText("5,60€ / 100,00€");
    expect(removeButton).toBeDefined();
    expect(budgetCurrentValue).toBeDefined();

    await userEvent.click(removeButton);

    await formFillingScenario("details", "1", "1999-01-18", "5");

    const buttons = screen.getAllByRole("button");
    const [validateButton] = buttons;
    expect(validateButton).toBeDefined();

    await userEvent.click(validateButton);

    const budgetCurrentValueUpdated = await screen.findByText(
      "0,60€ / 100,00€"
    );
    expect(budgetCurrentValueUpdated).toBeDefined();
  });

  test("formulaire budget - ajout dépense dans épargne", async () => {
    renderWithAllProviders(<ExpenseTracking />);

    const actionsButtons = screen.getAllByRole("button");
    const removeButton = actionsButtons[0];
    const savedCurrentValue = screen.getByText("200,00€");
    expect(removeButton).toBeDefined();
    expect(savedCurrentValue).toBeDefined();

    await userEvent.click(removeButton);

    await formFillingScenario("details", "2", "1999-01-18", "20");

    const buttons = screen.getAllByRole("button");
    const [validateButton] = buttons;
    expect(validateButton).toBeDefined();

    await userEvent.click(validateButton);

    const savedCurrentValueUpdated = await screen.findByText("180,00€");
    expect(savedCurrentValueUpdated).toBeDefined();
  });

  test("formulaire budget - rajout argent dans budget", async () => {
    renderWithAllProviders(<ExpenseTracking />);

    const actionsButtons = screen.getAllByRole("button");
    const addButton = actionsButtons[1];
    const budgetCurrentValue = screen.getByText("5,60€ / 100,00€");
    expect(addButton).toBeDefined();
    expect(budgetCurrentValue).toBeDefined();

    await userEvent.click(addButton);

    await formFillingScenario("details", "1", "1999-01-18", "5");

    const buttons = screen.getAllByRole("button");
    const [validateButton] = buttons;
    expect(validateButton).toBeDefined();

    await userEvent.click(validateButton);

    const budgetCurrentValueUpdated = await screen.findByText(
      "10,60€ / 100,00€"
    );
    expect(budgetCurrentValueUpdated).toBeDefined();
  });

  test("formulaire budget - rajout argent dans épargne", async () => {
    renderWithAllProviders(<ExpenseTracking />);

    const actionsButtons = screen.getAllByRole("button");
    const addButton = actionsButtons[1];
    const savedCurrentValue = screen.getByText("200,00€");
    expect(addButton).toBeDefined();
    expect(savedCurrentValue).toBeDefined();

    await userEvent.click(addButton);

    await formFillingScenario("details", "2", "1999-01-18", "20");

    const buttons = screen.getAllByRole("button");
    const [validateButton] = buttons;
    expect(validateButton).toBeDefined();

    await userEvent.click(validateButton);

    const savedCurrentValueUpdated = await screen.findByText("220,00€");
    expect(savedCurrentValueUpdated).toBeDefined();
  });
});
