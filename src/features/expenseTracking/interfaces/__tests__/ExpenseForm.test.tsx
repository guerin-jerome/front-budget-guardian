import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ExpenseForm } from "../expenseForm/ExpenseForm";
import {
  EXPENSE_AMOUNT_LABEL,
  EXPENSE_BUDGET_IMPACTED_LABEL,
  EXPENSE_DATE_LABEL,
  EXPENSE_DETAILS_LABEL,
} from "../label";
import userEvent from "@testing-library/user-event";

const formFillingScenario = async (
  details: string,
  budgetImpacted: string,
  date: string,
  amount: string
) => {
  const textboxDetails = screen.getByRole("textbox", {
    name: EXPENSE_DETAILS_LABEL,
  });
  await userEvent.type(textboxDetails, details);
  expect(textboxDetails).toBeDefined();

  const selectBudgetImpacted = screen.getByRole("combobox", {
    name: EXPENSE_BUDGET_IMPACTED_LABEL,
  });
  await userEvent.selectOptions(selectBudgetImpacted, budgetImpacted);
  expect(selectBudgetImpacted).toBeDefined();

  const datepicker = screen.getByLabelText(EXPENSE_DATE_LABEL);
  await userEvent.type(datepicker, date);
  expect(datepicker).toBeDefined();

  const textboxAmount = screen.getByRole("spinbutton", {
    name: EXPENSE_AMOUNT_LABEL,
  });
  await userEvent.type(textboxAmount, amount);
  expect(textboxAmount).toBeDefined();
};

describe("<ExpenseForm />", () => {
  test("fill form and click remove button", async () => {
    render(<ExpenseForm />);

    await formFillingScenario("details", "Loisirs", "18/01/1999", "100");

    const buttonRemove = screen.getByRole("button", { name: "-" });
    await userEvent.click(buttonRemove);
  });

  test("fill form and click add button", async () => {
    render(<ExpenseForm />);

    await formFillingScenario("details", "Loisirs", "18/01/1999", "100");

    const buttonAdd = screen.getByRole("button", { name: "+" });
    await userEvent.click(buttonAdd);
  });
});
