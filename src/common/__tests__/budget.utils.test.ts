import { describe, it, expect } from "vitest";
import {
  calculateBudgetConsumedPercentage,
  calculateTotalRemaining,
  getLibelleCurrentValue,
} from "../budget.utils";
import {
  MOCK_BUDGET,
  MOCK_BUDGETS,
  MOCK_BUDGET_FULL_CONSUMMED,
  MOCK_BUDGET_SAVED,
} from "../../mocks/budget.mock";

describe("Suite de tests budget.utils", () => {
  describe("calculateBudgetConsumedPercentage()", () => {
    it("should return 5% if budget type isnt saved", () => {
      expect(calculateBudgetConsumedPercentage(MOCK_BUDGET)).toBe("5%");
    });

    it("should return 100% if budget type isnt saved and spending = base", () => {
      expect(
        calculateBudgetConsumedPercentage(MOCK_BUDGET_FULL_CONSUMMED)
      ).toBe("100%");
    });

    it("should return 100% if budget type is saved", () => {
      expect(calculateBudgetConsumedPercentage(MOCK_BUDGET_SAVED)).toBe("100%");
    });
  });

  describe("getLibelleCurrentValue()", () => {
    it("should return 5/100€ if budget type isnt saved", () => {
      expect(getLibelleCurrentValue(MOCK_BUDGET)).toBe("5,6€/100€");
    });

    it("should return 200€ if budget type is saved", () => {
      expect(getLibelleCurrentValue(MOCK_BUDGET_SAVED)).toBe("200€");
    });
  });

  describe("calculateTotalRemaining()", () => {
    it("should return 219,4", () => {
      expect(calculateTotalRemaining(MOCK_BUDGETS)).toBe("219,4");
    });

    it("should return 0", () => {
      expect(calculateTotalRemaining([])).toBe("0");
    });
  });
});
