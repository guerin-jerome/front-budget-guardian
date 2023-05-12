import { Budget, BudgetType, BudgetTypeLibelle } from "@/entities/Budget";

/**
 * Attribut un libellé équivalent au type de budget pour l'UI
 * @param budget
 * @returns {BudgetTypeLibelle}
 */
export const buildLibelleTypeBudget = ({ type }: Budget): BudgetTypeLibelle => {
  switch (type) {
    case BudgetType.FIXE:
      return BudgetTypeLibelle.FIXE;
    case BudgetType.VARIABLE:
      return BudgetTypeLibelle.VARIABLE;
    case BudgetType.SAVED:
      return BudgetTypeLibelle.SAVED;
  }
};
