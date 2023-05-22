import { CurrentBudget } from "./currentBudget/CurrentBudget";
import { useExpenseTracking } from "../hooks/useExpenseTracking";
import { ExpenseForm } from "./expenseForm/ExpenseForm";
import { HeaderCurrentBudgets } from "./headerCurrentBudgets/HeaderCurrentBudgets";
import "./style.css";
import { ExpenseForm } from "./expenseForm/ExpenseForm";
import { HeaderCurrentBudgets } from "./headerCurrentBudgets/HeaderCurrentBudgets";
import "./style.css";

const { Title } = Typography;

export const ExpenseTracking = () => {
  const { budgets, displayedForm, setDisplayedForm } = useExpenseTracking();
  const { isFormDisplay, formType } = displayedForm;

  return (
    <div className="expense-tracking">
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
