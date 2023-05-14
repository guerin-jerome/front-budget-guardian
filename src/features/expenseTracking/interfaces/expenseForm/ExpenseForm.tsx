import {
  Button,
  ButtonAppearence,
  Label,
  Select,
  Textbox,
  Card,
} from "@/common/components";
import {
  EXPENSE_AMOUNT_LABEL,
  EXPENSE_BUDGET_IMPACTED_LABEL,
  EXPENSE_DATE_LABEL,
  EXPENSE_DETAILS_LABEL,
} from "../label";
import { useExpenseForm } from "../../hooks/useExpenseForm";
import { useForm } from "react-hook-form";
import "./style.css";

type ExpenseFormInputs = {
  details: string;
  date: string;
  budgetImpacted: string;
  amount: string;
};

export const ExpenseForm = () => {
  const { register, handleSubmit } = useForm<ExpenseFormInputs>();

  const { budgetsImpactedOptions, submitTextButtons, isMobileDevice } =
    useExpenseForm();

  const onSubmit = (values: ExpenseFormInputs) => console.debug(values);

  const detailsInput = register("details");
  const budgetImpactedInput = register("budgetImpacted");
  const dateInput = register("date");
  const amountInput = register("amount");

  return (
    <Card className="expense-card">
      <form className="expense-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Label htmlFor="details">{EXPENSE_DETAILS_LABEL}</Label>
          <Textbox placeholder="Ex: Courses" register={detailsInput} />
        </div>
        <div className="form-group">
          <Label htmlFor="budgetImpacted">
            {EXPENSE_BUDGET_IMPACTED_LABEL}
          </Label>
          <Select
            options={budgetsImpactedOptions}
            register={budgetImpactedInput}
            defaultValue="initial_value"
            defaultText="Sélectionnez un budget"
          />
        </div>
        <div className="form-group">
          <Label htmlFor="date">{EXPENSE_DATE_LABEL}</Label>
          <Textbox
            testId="date-input-expense"
            type="date"
            register={dateInput}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="amount">{EXPENSE_AMOUNT_LABEL}</Label>
          <Textbox
            placeholder="Ex: 100"
            type="number"
            step={0.01}
            register={amountInput}
          />
        </div>
        <div className="form-actions">
          <Button
            type="submit"
            isIconMode={!isMobileDevice}
            appearence={ButtonAppearence.DANGER}
          >
            {submitTextButtons.remove}
          </Button>
          <Button
            type="submit"
            isIconMode={!isMobileDevice}
            appearence={ButtonAppearence.SUCCESS}
          >
            {submitTextButtons.add}
          </Button>
        </div>
      </form>
    </Card>
  );
};
