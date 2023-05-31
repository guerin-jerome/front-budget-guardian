import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeaderBudgetsManagement } from "../headerBudgetsManagement/HeaderBudgetsManagement";
import { BUDGETS_TOTAL_TITLE_SECTION } from "../label";
import { renderWithAllProviders } from "@/common/utils/test";

describe("<HeaderBudgetsManagement />", () => {
  it("should render well", () => {
    renderWithAllProviders(
      <HeaderBudgetsManagement
        isFormDisplay={false}
        setIsFormDisplay={() => {}}
      />
    );

    /**
     * Vérification de la présence des items statiques
     */
    const totalLabel = screen.getByText(BUDGETS_TOTAL_TITLE_SECTION, {
      exact: false,
    });
    const buttonAddBudget = screen.getByRole("button", { name: "+" });

    expect(totalLabel).toBeDefined();
    expect(buttonAddBudget).toBeDefined();

    /**
     * Vérification de la présence des données bien formattées
     */
    const totalText = screen.getByText("835,00 €", { exact: false });

    expect(totalText).toBeDefined();
  });
});
