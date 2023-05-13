import {
  ADD_EXPENSE_TEXT_DESKTOP,
  ADD_EXPENSE_TEXT_MOBILE,
  REMOVE_EXPENSE_TEXT_DESKTOP,
  REMOVE_EXPENSE_TEXT_MOBILE,
} from "../interfaces/label";

type SubmitTextButtons = {
  add: string;
  remove: string;
};

export const SUBMIT_TEXT_BUTTONS_MOBILE = {
  add: ADD_EXPENSE_TEXT_MOBILE,
  remove: REMOVE_EXPENSE_TEXT_MOBILE,
};

export const SUBMIT_TEXT_BUTTONS_DESKTOP = {
  add: ADD_EXPENSE_TEXT_DESKTOP,
  remove: REMOVE_EXPENSE_TEXT_DESKTOP,
};

/**
 * Construit les deux textes des boutons de soumission de formulaire
 * d'ajout d'une dépense suivant si l'appareil est un ordinateur ou mobile
 * @param isMobileDevice
 * @returns {SubmitTextButtons}
 */
export const buildSubmitTextButtons = (
  isMobileDevice: boolean
): SubmitTextButtons =>
  isMobileDevice ? SUBMIT_TEXT_BUTTONS_MOBILE : SUBMIT_TEXT_BUTTONS_DESKTOP;
