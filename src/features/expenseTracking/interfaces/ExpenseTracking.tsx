import { CurrentBudget } from "./currentBudget/CurrentBudget";
import { useExpenseTracking } from "../hooks/useExpenseTracking";
import { ExpenseForm } from "./expenseForm/ExpenseForm";
import { HeaderCurrentBudgets } from "./headerCurrentBudgets/HeaderCurrentBudgets";
import { Typography } from "@/common/components";
import { NO_BUDGET_TEXT } from "./label";

const { Text } = Typography;
export const ExpenseTracking = () => {
  const { budgets, displayedForm, setDisplayedForm } = useExpenseTracking();
  const { isFormDisplay, formType } = displayedForm;

  return (
    <>
      <HeaderCurrentBudgets
        isFormDisplay={isFormDisplay}
        setDisplayedForm={setDisplayedForm}
      />
      {isFormDisplay && (
        <ExpenseForm formType={formType} setDisplayedForm={setDisplayedForm} />
      )}
      {budgets.length === 0 && <Text>{NO_BUDGET_TEXT}</Text>}
      {budgets.map((budget) => (
        <CurrentBudget {...budget} key={budget.id} />
      ))}
    </>
  );
};
