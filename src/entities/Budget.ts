export enum BudgetType {
  VARIABLE = "VARIABLE",
  FIXE = "FIXE",
  SAVED = "SAVED",
}

export enum BudgetTypeLibelle {
  FIXE = "Dépense fixe",
  VARIABLE = "Dépense variable",
  SAVED = "Épargne",
}

export type Budget = {
  id: number;
  type: BudgetType;
  name: string;
  base: number;
  remaining?: number;
};

export type BudgetVariable = Budget & {
  type: BudgetType.VARIABLE;
  remaining: number;
};

export type BudgetFixe = Budget & {
  type: BudgetType.FIXE;
  remaining: number;
};

export type BudgetSaved = Budget & {
  type: BudgetType.SAVED;
};
