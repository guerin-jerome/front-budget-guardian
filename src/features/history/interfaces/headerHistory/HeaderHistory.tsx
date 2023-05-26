import {
  Button,
  ButtonAppearence,
  Label,
  Select,
  Textbox,
} from "@/common/components";
import {
  BUDGET_IMPACTED_SELECT_LABEL,
  BUDGET_TYPE_SELECT_LABEL,
  DETAILS_INPUT_LABEL,
  SORT_ORDER_BUDGET_DATE_LABEL,
} from "../label";
import { TrashIcon } from "./TrashIcon";
import { useHeaderHistory } from "../../hooks/useHeaderHistory";
import { Dispatch, SetStateAction } from "react";
import { Expense } from "@/entities/Expense";
import "./style.css";

type HeaderHistory = {
  expenseList: Expense[];
  setExpenseList: Dispatch<SetStateAction<Expense[]>>;
};

export const HeaderHistory = ({
  expenseList,
  setExpenseList,
}: HeaderHistory) => {
  const {
    budgetNameSelectValues,
    budgetTypeSelectValues,
    sortByDateSelectValues,
    handleChangeExpenseName,
    handleChangeBudgetName,
    handleChangeBudgetType,
    handleChangeSortDate,
    handleClickReset,
  } = useHeaderHistory(expenseList, setExpenseList);

  return (
    <header className="header-history">
      <div className="filter">
        <Label htmlFor="filter_expense_name">{DETAILS_INPUT_LABEL}</Label>
        <Textbox
          id="filter_expense_name"
          placeholder="Exemple : courses de la semaine"
          onChange={handleChangeExpenseName}
        />
      </div>
      <div className="filter">
        <Label htmlFor="filter_budget_impacted">
          {BUDGET_IMPACTED_SELECT_LABEL}
        </Label>
        <Select
          id="filter_budget_impacted"
          options={budgetNameSelectValues}
          defaultText="Tous"
          defaultValue="initial_value"
          isDefaultDisabled={false}
          onChange={handleChangeBudgetName}
        />
      </div>
      <div className="filter">
        <Label htmlFor="filter_budget_type">{BUDGET_TYPE_SELECT_LABEL}</Label>
        <Select
          id="filter_budget_type"
          options={budgetTypeSelectValues}
          defaultText="Tous"
          defaultValue="initial_value"
          isDefaultDisabled={false}
          onChange={handleChangeBudgetType}
        />
      </div>
      <div className="filter filter-date">
        <Label htmlFor="sort_date">{SORT_ORDER_BUDGET_DATE_LABEL}</Label>
        <Select
          id="sort_date"
          options={sortByDateSelectValues}
          defaultText="Plus récent"
          defaultValue="initial_value"
          isDefaultDisabled={false}
          onChange={handleChangeSortDate}
        />
      </div>
      <Button
        onClick={handleClickReset}
        isIconMode
        appearence={ButtonAppearence.SECONDARY}
      >
        <TrashIcon />
      </Button>
    </header>
  );
};
