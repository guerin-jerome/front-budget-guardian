import { BudgetsContextProvider } from "@/context/BudgetsContext";
import { ExpensesContextProvider } from "@/context/ExpensesContext";
import { MobileContextProvider } from "@/context/MobileContext";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const renderWithAllProviders = (component: ReactNode) =>
  render(
    <MobileContextProvider>
      <BudgetsContextProvider>
        <ExpensesContextProvider>
          <BrowserRouter>{component}</BrowserRouter>
        </ExpensesContextProvider>
      </BudgetsContextProvider>
    </MobileContextProvider>
  );

export const renderWithMobileAndBudgetProviders = (component: ReactNode) =>
  render(
    <MobileContextProvider>
      <ExpensesContextProvider>
        <BudgetsContextProvider>{component}</BudgetsContextProvider>
      </ExpensesContextProvider>
    </MobileContextProvider>
  );
