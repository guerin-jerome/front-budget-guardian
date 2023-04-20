import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ViewExpenseTracking } from "../containers/ViewExpenseTracking/ViewExpenseTracking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home/expense-tracking",
    element: <ViewExpenseTracking />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
