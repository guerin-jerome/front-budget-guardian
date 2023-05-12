import { Typography } from "@/common/components";
import { CurrentBudget } from "./currentBudget/CurrentBudget";
import {
  ADD_EXPENSE_TITLE_SECTION,
  EXPENSE_TRACKING_TITLE,
  TOTAL_REMAINING_TITLE_SECTION,
} from "./label";
import { useExpenseTracking } from "../hooks/useExpenseTracking";
import "./style.css";
import { ExpenseForm } from "./expenseForm/ExpenseForm";

const { Title } = Typography;

export const ExpenseTracking = () => {
  const { budgets, totalRemaining } = useExpenseTracking();
  return (
    <div className="container">
      <Title level={2}>{EXPENSE_TRACKING_TITLE}</Title>
      <Title level={3}>{ADD_EXPENSE_TITLE_SECTION}</Title>
      <ExpenseForm />
      <Title level={3}>
        {TOTAL_REMAINING_TITLE_SECTION}
        {totalRemaining}
      </Title>
      {budgets.map((budget) => (
        <CurrentBudget {...budget} key={budget.id} />
      ))}
    </div>
  );
};
