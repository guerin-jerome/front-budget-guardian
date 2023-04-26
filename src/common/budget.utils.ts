import { TBudget } from "@/interfaces/TBudget";
import { EBudgetType } from "./constants/budget";
import {
  calculatePercentageFloored,
  replacePointByComma,
} from "./number.utils";

/**
 * Calcule le pourcentage consommé du budget ou rend 100% si c'est une épargne
 * @param budget
 * @returns {string}
 */
export const calculateBudgetConsumedPercentage = ({
  type,
  spending,
  base,
}: TBudget): string =>
  type !== EBudgetType.SAVED && spending
    ? `${calculatePercentageFloored(spending, base).toString()}%`
    : "100%";

/**
 * Donne le libellé à afficher pour la valeur courante du budget
 * @param budget
 * @returns {string}
 */
export const getLibelleCurrentValue = ({
  type,
  spending,
  base,
}: TBudget): string =>
  type !== EBudgetType.SAVED && spending
    ? `${replacePointByComma(spending)}€/${base}€`
    : `${base}€`;

/**
 * Calcule le montant total restant de tous les budgets en enlevant les dépenses
 * @param budgets
 * @returns {string}
 */
export const calculateTotalRemaining = (budgets: TBudget[]): string =>
  budgets.length > 0
    ? replacePointByComma(
        budgets
          .map(({ base, spending }) => (spending ? base - spending : 0))
          .reduce((prev, current) => prev + current)
      )
    : "0";
