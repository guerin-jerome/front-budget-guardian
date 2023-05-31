import {
  Button,
  ButtonAppearence,
  Card,
  Label,
  Select,
  Textbox,
} from "@/common/components";
import {
  CancelIcon,
  ValidateIcon,
} from "@/features/expenseTracking/interfaces/expenseForm/ExpenseFormIcons";
import {
  BUDGET_AMOUNT_LABEL,
  BUDGET_NAME_LABEL,
  BUDGET_TYPE_LABEL,
} from "../label";
import "./style.css";
import { useBudgetForm } from "../../hooks/useBudgetForm";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BudgetType } from "@/entities/Budget";

const budgetFormValidator = object<BudgetFormInputs>({
  name: string().required(),
  type: string()
    .nonNullable()
    .test(
      "should select a budget",
      (value?: string) => !!value && value !== "initial_value"
    ),
  amount: string().required(),
}).required();

export type BudgetFormInputs = {
  name: string;
  type: BudgetType | "initial_value";
  amount: string;
};

type BudgetFormProps = {
  setIsFormDisplay: Dispatch<SetStateAction<boolean>>;
};

export const BudgetForm = ({ setIsFormDisplay }: BudgetFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BudgetFormInputs>({
    defaultValues: {
      type: "initial_value",
    },
    resolver: yupResolver(budgetFormValidator),
  });

  const { budgetTypeSelectOptions, handleClickCancel, handleSubmitBudgetForm } =
    useBudgetForm(setIsFormDisplay);

  const nameInput = register("name");
  const typeInput = register("type");
  const amountInput = register("amount");

  return (
    <Card className="budget-form-card">
      <form
        onSubmit={handleSubmit(handleSubmitBudgetForm)}
        className="budget-form"
      >
        <div className="budget-form-item">
          <Label htmlFor="budget-name">{BUDGET_NAME_LABEL}</Label>
          <Textbox
            placeholder="Ex: Courses"
            register={nameInput}
            hasError={!!errors.name}
          />
        </div>
        <div className="budget-form-item">
          <Label htmlFor="budget-type">{BUDGET_TYPE_LABEL}</Label>
          <Select
            options={budgetTypeSelectOptions}
            register={typeInput}
            hasError={!!errors.type}
            defaultText="Sélectionnez un type"
            defaultValue="initial_value"
          />
        </div>
        <div className="budget-form-item">
          <Label htmlFor="budget-amount">{BUDGET_AMOUNT_LABEL}</Label>
          <Textbox
            type="number"
            step={0.01}
            placeholder="Ex: 100"
            register={amountInput}
            hasError={!!errors.amount}
          />
        </div>
        <div className="budget-form-actions">
          <Button
            isIconMode
            appearence={ButtonAppearence.PRIMARY}
            type="submit"
          >
            <ValidateIcon />
          </Button>
          <Button
            onClick={handleClickCancel}
            isIconMode
            appearence={ButtonAppearence.SECONDARY}
          >
            <CancelIcon />
          </Button>
        </div>
      </form>
    </Card>
  );
};
