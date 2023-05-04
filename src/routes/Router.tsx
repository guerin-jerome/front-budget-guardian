import { ViewExpenseTracking } from "@/containers/ViewExpenseTracking/ViewExpenseTracking";
import { ViewProductPage } from "@/containers/ViewProductPage/ViewProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewProductPage />,
  },
  {
    path: "/home/expense-tracking",
    element: <ViewExpenseTracking />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
