import React from "react";
import ReactDOM from "react-dom/client";
import { ViewExpenseTracking } from "./containers/ViewExpenseTracking/ViewExpenseTracking";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ViewExpenseTracking />
  </React.StrictMode>
);
