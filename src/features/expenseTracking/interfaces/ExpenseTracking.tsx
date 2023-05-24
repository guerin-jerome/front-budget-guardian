import { Typography } from "@/common/components";
import { CurrentBudget } from "./currentBudget/CurrentBudget";
import { EXPENSES_TRACKING_TITLE } from "./label";
import { useExpenseTracking } from "../hooks/useExpenseTracking";
import { ExpenseForm } from "./expenseForm/ExpenseForm";
import { HeaderCurrentBudgets } from "./headerCurrentBudgets/HeaderCurrentBudgets";
import "./style.css";

const { Title } = Typography;

export const ExpenseTracking = () => {
  const { budgets, displayedForm, setDisplayedForm } = useExpenseTracking();
  const { isFormDisplay, formType } = displayedForm;

  return (
    <div className="container">
      <Title level={2}>{EXPENSES_TRACKING_TITLE}</Title>
      <HeaderCurrentBudgets
        isFormDisplay={isFormDisplay}
        setDisplayedForm={setDisplayedForm}
      />
      {isFormDisplay && (
        <ExpenseForm formType={formType} setDisplayedForm={setDisplayedForm} />
      )}
      {budgets.map((budget) => (
        <CurrentBudget {...budget} key={budget.id} />
      ))}
    </div>
  );
};
