import { ViewCurrentBudget } from "../../components/ViewCurrentBudget/ViewCurrentBudget";
import { useBudgetTracking } from "../../hooks/useBudgetTracking";
import "./style.css";

export const ViewBudgetTracking = () => {
  const { budgets, totalRemaining } = useBudgetTracking();

  return (
    <div className="container">
      <h2>Suivi des dépenses</h2>
      <p>
        Total restant :{" "}
        <span className="total-restant">{totalRemaining}&nbsp;€</span>
      </p>
      {budgets.map((budget) => (
        <ViewCurrentBudget {...budget} key={budget.id} />
      ))}
    </div>
  );
};
