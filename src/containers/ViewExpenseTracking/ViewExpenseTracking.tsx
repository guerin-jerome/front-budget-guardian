import { ViewCurrentBudget } from "./ViewCurrentBudget/ViewCurrentBudget";
import { Typography } from "../../components/Typography/Typography";
import { useExpenseTracking } from "../../hooks/useExpenseTracking";
import { EXPENSE_TRACKING_TITLE } from "./expenseTracking.label";
import "./expenseTracking.css";

const { Title, Text } = Typography;

export const ViewExpenseTracking = () => {
  const { budgets, totalRemaining } = useExpenseTracking();

  return (
    <div className="container">
      <Title level={2}>{EXPENSE_TRACKING_TITLE}</Title>
      <Text>Total restant : {totalRemaining} €</Text>
      {budgets.map((budget) => (
        <ViewCurrentBudget {...budget} key={budget.id} />
      ))}
    </div>
  );
};
