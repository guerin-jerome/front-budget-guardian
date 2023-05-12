import { ProductPage } from "@/ProductPage";
import { ExpenseTracking } from "@/features/expenseTracking/interfaces";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PAGES, routes } from "./routes";

const router = createBrowserRouter([
  {
    path: routes[PAGES.PRODUCT],
    element: <ProductPage />,
  },
  {
    path: routes[PAGES.EXPENSE_TRACKING],
    element: <ExpenseTracking />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
