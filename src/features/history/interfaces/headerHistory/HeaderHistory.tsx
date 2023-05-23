import { Label, Select, Textbox, Typography } from "@/common/components";
import "./style.css";

const { Bold } = Typography;

export const HeaderHistory = () => (
  <header className="header-history">
    <div className="filter">
      <Label htmlFor="filter_budget_name">Détails :</Label>
      <Textbox
        id="filter_budget_name"
        placeholder="Exemple : courses de la semaine"
      />
    </div>
    <div className="filter">
      <Label htmlFor="filter_budget_impacted">Budget :</Label>
      <Select
        id="filter_budget_impacted"
        options={[]}
        defaultText="Tous"
        defaultValue="initial_value"
        isDefaultDisabled={false}
      />
    </div>
    <div className="filter">
      <Label htmlFor="filter_budget_type">Type :</Label>
      <Select
        id="filter_budget_type"
        options={[]}
        defaultText="Tous"
        defaultValue="initial_value"
        isDefaultDisabled={false}
      />
    </div>
    <div className="filter">
      <Label htmlFor="filter_date">Trier par date :</Label>
      <Select
        id="filter_date"
        options={[]}
        defaultText="Tous"
        defaultValue="initial_value"
        isDefaultDisabled={false}
      />
    </div>
  </header>
);
