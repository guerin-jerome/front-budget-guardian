import { ProductPage } from "@/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PAGES, routes } from "./routes";
import { ExpenseTracking } from "@/features/expenseTracking/interfaces";
import { Menu } from "@/features/Menu/interfaces";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes[PAGES.PRODUCT]} element={<ProductPage />} />
      <Route path={routes[PAGES.HOME]} element={<Menu />}>
        <Route
          path={routes[PAGES.EXPENSES_TRACKING]}
          element={<ExpenseTracking />}
        />
        <Route
          path={routes[PAGES.BUDGETS_MANAGEMENT]}
          element={<p>Budgets management</p>}
        />
        <Route path={routes[PAGES.HISTORY]} element={<p>History</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
