import { expect, describe, test } from "vitest";
import { MENU_ITEM } from "../../hooks/useHome";
import { findTitleByMenuItem } from "../findTitleByMenuItem";
import {
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP as BUDGET_MANAGEMENT_TITLE,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP as EXPENSE_TRACKING_TITLE,
  HISTORY_TITLE,
} from "../../interfaces/label";

describe("findTitleByMenuItem()", () => {
  test("with expenses tracking item", () => {
    expect(findTitleByMenuItem(MENU_ITEM.EXPENSES_TRACKING)).toEqual(
      EXPENSE_TRACKING_TITLE
    );
  });

  test("with budget management item", () => {
    expect(findTitleByMenuItem(MENU_ITEM.BUDGETS_MANAGEMENT)).toEqual(
      BUDGET_MANAGEMENT_TITLE
    );
  });

  test("with history item", () => {
    expect(findTitleByMenuItem(MENU_ITEM.HISTORY)).toEqual(HISTORY_TITLE);
  });
});
