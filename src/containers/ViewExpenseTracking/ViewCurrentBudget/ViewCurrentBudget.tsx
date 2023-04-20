import { useCurrentBudget } from "../../../hooks/useCurrentBudget";
import { TBudget } from "../../../interfaces/TBudget";
import "./currentBudget.css";

export const ViewCurrentBudget = (budget: TBudget) => {
  const { name, type } = budget;
  const { libelleCurrentValue, percentConsummed } = useCurrentBudget(budget);

  return (
    <div className="budget">
      <h3>{name}</h3>
      <div className="budget-info">
        <span className="budget-type">{type}</span>
        <span className="budget-value">{libelleCurrentValue}</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: percentConsummed }} />
      </div>
    </div>
  );
};
