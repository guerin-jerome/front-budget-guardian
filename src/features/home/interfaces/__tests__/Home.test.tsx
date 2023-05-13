import { screen } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import {
  renderWithMobileAndRouterProvider,
  renderWithMobileContextProvider,
} from "@/common/utils/test";
import {
  MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE,
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP,
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP,
  MENU_ITEM_HISTORIQUE_TEXT,
} from "@/features/home/interfaces/label";
import { Home } from "../Home";

test("<Home />", async () => {
  renderWithMobileAndRouterProvider(<Home />);

  expect(window.location.pathname).toEqual("/expenses-tracking");

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

  expect(window.location.pathname).toEqual("/budgets-management");

  await userEvent.click(historyLinkMobile);

  expect(window.location.pathname).toEqual("/history");

  await userEvent.click(expenseTrackingLinkMobile);

  expect(window.location.pathname).toEqual("/expenses-tracking");
});
