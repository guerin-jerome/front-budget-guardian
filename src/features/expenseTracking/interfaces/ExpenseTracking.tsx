import { Typography } from "@/common/components";
import { CurrentBudget } from "./currentBudget/CurrentBudget";
import { EXPENSE_TRACKING_TITLE } from "./label";
import { useExpenseTracking } from "../hooks/useExpenseTracking";
import "./style.css";

const { Title, Text } = Typography;

export const ExpenseTracking = () => {
  const { budgets, totalRemaining } = useExpenseTracking();
  return (
    <div className="container">
      <Title level={2}>{EXPENSE_TRACKING_TITLE}</Title>
      <Text>Total restant : {totalRemaining}</Text>
      {budgets.map((budget) => (
        <CurrentBudget {...budget} key={budget.id} />
      ))}
    </div>
  );
};
