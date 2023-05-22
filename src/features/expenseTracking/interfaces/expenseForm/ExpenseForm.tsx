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
import { getDateFormattedYYYYMMDD } from "@/common/utils/date";
import { useExpenseForm } from "../../hooks/useExpenseForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { Dispatch, SetStateAction } from "react";
import { DisplayedForm, FormType } from "../../hooks/useExpenseTracking";
import { CancelIcon, ValidateIcon } from "./ExpenseFormIcons";
import "./style.css";

const expenseFormValidator = object<ExpenseFormInputs>({
  details: string(),
  date: string().required(),
  budgetImpacted: string()
    .nonNullable()
    .test(
      "should select a budget",
      (value?: string) => !!value && value !== "initial_value"
    ),
  amount: string().required(),
}).required();

export type ExpenseFormInputs = {
  details: string;
  date: string;
  budgetImpacted: string;
  amount: string;
};

type ExpenseFormProps = {
  formType?: FormType;
  setDisplayedForm: Dispatch<SetStateAction<DisplayedForm>>;
};

export const ExpenseForm = ({
  formType,
  setDisplayedForm,
}: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormInputs>({
    defaultValues: {
      budgetImpacted: "initial_value",
      date: getDateFormattedYYYYMMDD(new Date()),
    },
    resolver: yupResolver(expenseFormValidator),
  });

  const { budgetsImpactedOptions, handleSubmitExpenseForm, handleCancel } =
    useExpenseForm(setDisplayedForm, formType!!);

  const detailsInput = register("details");
  const budgetImpactedInput = register("budgetImpacted");
  const dateInput = register("date");
  const amountInput = register("amount");

  return (
    <Card className="expense-form-card">
      <form
        className="expense-form"
        onSubmit={handleSubmit(handleSubmitExpenseForm)}
      >
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
            defaultText="Sélectionnez un budget"
            hasError={!!errors.budgetImpacted}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="date">{EXPENSE_DATE_LABEL}</Label>
          <Textbox
            testId="date-input-expense"
            type="date"
            register={dateInput}
            hasError={!!errors.date}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="amount">{EXPENSE_AMOUNT_LABEL}</Label>
          <Textbox
            placeholder="Ex: 100"
            type="number"
            step={0.01}
            register={amountInput}
            hasError={!!errors.amount}
          />
        </div>
        <div className="form-actions">
          <Button
            type="submit"
            isIconMode={true}
            appearence={ButtonAppearence.PRIMARY}
          >
            <ValidateIcon />
          </Button>
          <Button
            onClick={handleCancel}
            isIconMode={true}
            appearence={ButtonAppearence.SECONDARY}
          >
            <CancelIcon />
          </Button>
        </div>
      </form>
    </Card>
  );
};
