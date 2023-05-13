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
import "./style.css";

export const ExpenseForm = () => {
  const { budgetsImpactedOptions, submitLabelButtons, isMobileDevice } =
    useExpenseForm();

  return (
    <Card className="expense-card">
      <form className="expense-form">
        <div className="form-group">
          <Label htmlFor="detail-expense">{EXPENSE_DETAILS_LABEL}</Label>
          <Textbox
            id="detail-expense"
            name="detail-expense"
            placeholder="Ex: Courses"
            onChange={() => {}}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="budget-impacted-expense">
            {EXPENSE_BUDGET_IMPACTED_LABEL}
          </Label>
          <Select
            id="budget-impacted-expense"
            name="budget-impacted-expense"
            options={budgetsImpactedOptions}
            onChange={() => {}}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="date-expense">{EXPENSE_DATE_LABEL}</Label>
          <input type="date" id="date-expense" name="date-expense" />
        </div>
        <div className="form-group">
          <Label htmlFor="amount-expense">{EXPENSE_AMOUNT_LABEL}</Label>
          <Textbox
            id="amount-expense"
            name="amount-expense"
            placeholder="Ex: 100"
            type="number"
            step={0.01}
            onChange={() => {}}
          />
        </div>
        <div className="form-actions">
          <Button
            type="submit"
            isIconMode={!isMobileDevice}
            onClick={(e) => e.preventDefault()}
            appearence={ButtonAppearence.DANGER}
          >
            {submitLabelButtons.remove}
          </Button>
          <Button
            type="submit"
            isIconMode={!isMobileDevice}
            onClick={(e) => e.preventDefault()}
            appearence={ButtonAppearence.SUCCESS}
          >
            {submitLabelButtons.add}
          </Button>
        </div>
      </form>
    </Card>
  );
};
