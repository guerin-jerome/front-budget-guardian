import { screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { HeaderCurrentBudgets } from "../headerCurrentBudgets/HeaderCurrentBudgets";
import { RESET_BUTTON_TEXT, TOTAL_REMAINING_TITLE_SECTION } from "../label";
import { renderWithAllProviders } from "@/common/utils/test";

describe("<HeaderCurrentBudgets />", () => {
  test("with saved budet", async () => {
    renderWithAllProviders(<HeaderCurrentBudgets />);

    const totalRemainingTitle = screen.getByText(
      TOTAL_REMAINING_TITLE_SECTION,
      {
        exact: false,
      }
    );
    const totalRemaining = screen.getByText(/219,40 €/i);
    const resetButton = screen.getByRole("button", { name: RESET_BUTTON_TEXT });

    expect(totalRemainingTitle).toBeDefined();
    expect(totalRemaining).toBeDefined();
    expect(resetButton).toBeDefined();
  });
});
