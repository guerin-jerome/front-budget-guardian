import { ProductPage } from "@/ProductPage";
import { ExpenseTracking } from "@/features/expenseTracking/interfaces";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage />,
  },
  {
    path: "/home/expense-tracking",
    element: <ExpenseTracking />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
