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
import "./style.css";
import { TrashIcon } from "./TrashIcon";
import { useHeaderHistory } from "../../hooks/useHeaderHistory";

export const HeaderHistory = () => {
  const { handleClickReset } = useHeaderHistory();

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
        <Label htmlFor="filter_date">{SORT_ORDER_BUDGET_DATE_LABEL}</Label>
        <Select
          id="filter_date"
          options={[]}
          defaultText="Tous"
          defaultValue="initial_value"
          isDefaultDisabled={false}
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
