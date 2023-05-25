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
  setExpenseList: Dispatch<SetStateAction<Expense[]>>;
};

export const HeaderHistory = ({ setExpenseList }: HeaderHistory) => {
  const { sortByDateSelectValues, handleClickReset, handleChangeSortDate } =
    useHeaderHistory(setExpenseList);

  return (
    <header className="header-history">
      <div className="filter">
        <Label htmlFor="filter_budget_name">{DETAILS_INPUT_LABEL}</Label>
        <Textbox
          id="filter_budget_name"
          placeholder="Exemple : courses de la semaine"
        />
      </div>
      <div className="filter">
        <Label htmlFor="filter_budget_impacted">
          {BUDGET_IMPACTED_SELECT_LABEL}
        </Label>
        <Select
          id="filter_budget_impacted"
          options={[]}
          defaultText="Tous"
          defaultValue="initial_value"
          isDefaultDisabled={false}
        />
      </div>
      <div className="filter">
        <Label htmlFor="filter_budget_type">{BUDGET_TYPE_SELECT_LABEL}</Label>
        <Select
          id="filter_budget_type"
          options={[]}
          defaultText="Tous"
          defaultValue="initial_value"
          isDefaultDisabled={false}
        />
      </div>
      <div className="filter">
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
