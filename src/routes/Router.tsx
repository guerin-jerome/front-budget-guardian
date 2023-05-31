import { ProductPage } from "@/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PAGES, routes } from "./routes";
import { ExpenseTracking } from "@/features/expenseTracking/interfaces";
import { Home } from "@/features/home/interfaces";
import { History } from "@/features/history/interfaces";
import { BudgetsManagement } from "@/features/budgetsManagement/interfaces";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes[PAGES.PRODUCT]} element={<ProductPage />} />
      <Route path={routes[PAGES.HOME]} element={<Home />}>
        <Route
          path={routes[PAGES.EXPENSES_TRACKING]}
          element={<ExpenseTracking />}
        />
        <Route
          path={routes[PAGES.BUDGETS_MANAGEMENT]}
          element={<BudgetsManagement />}
        />
        <Route path={routes[PAGES.HISTORY]} element={<History />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
