import {
  ADD_EXPENSE_LABEL_DESKTOP,
  ADD_EXPENSE_LABEL_MOBILE,
  REMOVE_EXPENSE_LABEL_DESKTOP,
  REMOVE_EXPENSE_LABEL_MOBILE,
} from "../interfaces/label";

type SubmitLabelButtons = {
  add: string;
  remove: string;
};

export const SUBMIT_LABEL_BUTTONS_MOBILE = {
  add: ADD_EXPENSE_LABEL_MOBILE,
  remove: REMOVE_EXPENSE_LABEL_MOBILE,
};

export const SUBMIT_LABEL_BUTTONS_DESKTOP = {
  add: ADD_EXPENSE_LABEL_DESKTOP,
  remove: REMOVE_EXPENSE_LABEL_DESKTOP,
};

/**
 * Construit les deux labels des boutons de soumission de formulaire
 * d'ajout d'une dépense suivant si l'appareil est un ordinateur ou mobile
 * @param isMobileDevice
 * @returns {SubmitLabelButtons}
 */
export const buildSubmitLabelButtons = (
  isMobileDevice: boolean
): SubmitLabelButtons =>
  isMobileDevice ? SUBMIT_LABEL_BUTTONS_MOBILE : SUBMIT_LABEL_BUTTONS_DESKTOP;
