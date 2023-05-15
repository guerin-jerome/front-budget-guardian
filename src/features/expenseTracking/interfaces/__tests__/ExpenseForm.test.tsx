import { screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ExpenseForm } from "../expenseForm/ExpenseForm";
import { renderWithAllProviders } from "@/common/utils/test";
import {
  SUBMIT_TEXT_BUTTONS_DESKTOP,
  SUBMIT_TEXT_BUTTONS_MOBILE,
} from "../../domain/buildSubmitTextButtons";

describe("<ExpenseForm />", () => {
  test("icon button with desktop device", () => {
    renderWithAllProviders(<ExpenseForm />);

    const addButon = screen.getByRole("button", {
      name: SUBMIT_TEXT_BUTTONS_DESKTOP.add,
    });
    const removeButton = screen.getByRole("button", {
      name: SUBMIT_TEXT_BUTTONS_DESKTOP.remove,
    });

    expect(addButon).toBeDefined();
    expect(removeButton).toBeDefined();
  });

  test("text button with mobile device", async () => {
    renderWithAllProviders(<ExpenseForm />);

    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    const addButon = await screen.findByRole("button", {
      name: SUBMIT_TEXT_BUTTONS_MOBILE.add,
    });
    const removeButton = screen.getByRole("button", {
      name: SUBMIT_TEXT_BUTTONS_MOBILE.remove,
    });

    expect(addButon).toBeDefined();
    expect(removeButton).toBeDefined();
  });
});
