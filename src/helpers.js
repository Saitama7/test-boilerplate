import { handleActions } from 'redux-actions'
// import { Decimal } from 'decimal.js';

/**
 * Handle actions that will return a boolean value
 * @param {Function[]} truthyActions
 * @param {Function[]} falsyActions
 * @param {Boolean=false} initialState
 * @return {*}
 */
export const boolReducer = (truthyActions, falsyActions, initialState = false) => handleActions(
  {
    [truthyActions]: () => true,
    [falsyActions]: () => false,
  },
  initialState
)

/**
 * Money base operations
 * @param {a} first amount
 * @param {b} second amount
 * @return {result} Decimal object type
 */
// export const addMoney = (a, b) => {
//   if (a >= 0 && b >= 0) {
//     return Decimal.add(a, b);
//   }
//   return 0;
// };

// export const subMoney = (a, b) => {
//   if (a >= 0 && b >= 0 && a >= b) {
//     return Decimal.sub(a, b);
//   }
//   return 0;
// };

// export const mulMoney = (a, b) => {
//   if (a > 0 && b > 0) {
//     return Decimal.mul(a, b);
//   }
//   return 0;
// };

// export const divMoney = (a, b) => {
//   if (a > 0 && b > 0) {
//     return Decimal.div(a, b);
//   }
//   return 0;
// };
