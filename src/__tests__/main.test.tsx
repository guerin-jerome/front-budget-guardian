import { Router } from "@/routes/Router";
import { screen } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithMobileContextProvider } from "@/common/utils/test";
import {
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP,
  MENU_ITEM_HISTORIQUE_TEXT,
} from "@/features/home/interfaces/label";

test("Application integration tests", async () => {
  renderWithMobileContextProvider(<Router />);
  /**
   * Location : Product page
   */
  expect(window.location.pathname).toEqual("/");

  // Get button to go on home expense tracking
  const button = screen.getByRole("button");
  await userEvent.click(button);

  /**
   * Location : Home - Expenses tracking
   */
  expect(window.location.pathname).toEqual("/home/expenses-tracking");

  const manageBudgetLink = screen.getByRole("link", {
    name: MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP.toUpperCase(),
  });
  expect(manageBudgetLink).toBeDefined();

  await userEvent.click(manageBudgetLink);

  /**
   * Location : Home - Budgets management
   */
  expect(window.location.pathname).toEqual("/home/budgets-management");

  const historyLink = screen.getByRole("link", {
    name: MENU_ITEM_HISTORIQUE_TEXT.toUpperCase(),
  });
  expect(historyLink).toBeDefined();

  await userEvent.click(historyLink);

  /**
   * Location : Home - History
   */
  expect(window.location.pathname).toEqual("/home/history");
});
