import { screen } from "@testing-library/react";
import { test, expect, describe, vi } from "vitest";
import { HeaderCurrentBudgets } from "../headerCurrentBudgets/HeaderCurrentBudgets";
import { TOTAL_REMAINING_TITLE_SECTION } from "../label";
import { renderWithAllProviders } from "@/common/utils/test";

describe("<HeaderCurrentBudgets />", () => {
  test("formulaire de dépense affiché", async () => {
    const setDisplayedForm = vi.fn();

    renderWithAllProviders(
      <HeaderCurrentBudgets
        isFormDisplay={true}
        setDisplayedForm={setDisplayedForm}
      />
    );

    const totalRemainingTitle = screen.getByText(
      TOTAL_REMAINING_TITLE_SECTION,
      {
        exact: false,
      }
    );
    const totalRemaining = screen.getByText(/615,60 €/i);

    expect(totalRemainingTitle).toBeDefined();
    expect(totalRemaining).toBeDefined();
  });

  test("formulaire de dépense non affiché", async () => {
    const setDisplayedForm = vi.fn();

    renderWithAllProviders(
      <HeaderCurrentBudgets
        isFormDisplay={false}
        setDisplayedForm={setDisplayedForm}
      />
    );

    const totalRemainingTitle = screen.getByText(
      TOTAL_REMAINING_TITLE_SECTION,
      {
        exact: false,
      }
    );
    const totalRemaining = screen.getByText(/615,60 €/i);
    const buttons = screen.getAllByRole("button");

    expect(totalRemainingTitle).toBeDefined();
    expect(totalRemaining).toBeDefined();
    expect(buttons).toBeDefined();
  });
});
