import { Typography } from "@/common/components";
import { CurrentBudget } from "./currentBudget/CurrentBudget";
import { ADD_EXPENSE_TITLE_SECTION, EXPENSE_TRACKING_TITLE } from "./label";
import { useExpenseTracking } from "../hooks/useExpenseTracking";
import { ExpenseForm } from "./expenseForm/ExpenseForm";
import { HeaderCurrentBudgets } from "./headerCurrentBudgets/HeaderCurrentBudgets";
import "./style.css";

const { Title } = Typography;

export const ExpenseTracking = () => {
  const { budgets } = useExpenseTracking();
  return (
    <div className="container">
      <Title level={2}>{EXPENSE_TRACKING_TITLE}</Title>
      <Title level={3}>{ADD_EXPENSE_TITLE_SECTION}</Title>
      <ExpenseForm />
      <HeaderCurrentBudgets />
      {budgets.map((budget) => (
        <CurrentBudget {...budget} key={budget.id} />
      ))}
    </div>
  );
};
