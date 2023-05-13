import { BudgetContextProvider } from "@/context/BudgetsContext";
import { MobileContextProvider } from "@/context/MobileContext";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const renderWithAllProviders = (component: ReactNode) =>
  render(
    <MobileContextProvider>
      <BudgetContextProvider>
        <BrowserRouter>{component}</BrowserRouter>
      </BudgetContextProvider>
    </MobileContextProvider>
  );

export const renderWithMobileAndBudgetProviders = (component: ReactNode) =>
  render(
    <MobileContextProvider>
      <BudgetContextProvider>{component}</BudgetContextProvider>
    </MobileContextProvider>
  );
