import { Router } from "@/routes/Router";
import { screen } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import {
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP,
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE,
  MENU_ITEM_HISTORIQUE_TEXT,
} from "@/features/Menu/domain/buildItemText";
import { renderWithMobileContextProvider } from "@/common/utils/test";

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

  const expenseTrackingLink = screen.getByRole("link", {
    name: MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP.toUpperCase(),
  });
  const manageBudgetLink = screen.getByRole("link", {
    name: MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP.toUpperCase(),
  });
  const historyLink = screen.getByRole("link", {
    name: MENU_ITEM_HISTORIQUE_TEXT.toUpperCase(),
  });

  expect(expenseTrackingLink).toBeDefined();
  expect(manageBudgetLink).toBeDefined();
  expect(historyLink).toBeDefined();

  // Resize window to phone width
  global.innerWidth = 500;
  global.dispatchEvent(new Event("resize"));

  const expenseTrackingLinkMobile = await screen.findByRole("link", {
    name: MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE.toUpperCase(),
  });
  const manageBudgetLinkMobile = screen.getByRole("link", {
    name: MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE.toUpperCase(),
  });
  const historyLinkMobile = screen.getByRole("link", {
    name: MENU_ITEM_HISTORIQUE_TEXT.toUpperCase(),
  });

  expect(expenseTrackingLinkMobile).toBeDefined();
  expect(manageBudgetLinkMobile).toBeDefined();
  expect(historyLinkMobile).toBeDefined();

  await userEvent.click(manageBudgetLinkMobile);

  /**
   * Location : Home - Budgets management
   */
  expect(window.location.pathname).toEqual("/home/budgets-management");

  await userEvent.click(historyLinkMobile);

  /**
   * Location : Home - History
   */
  expect(window.location.pathname).toEqual("/home/history");
});
