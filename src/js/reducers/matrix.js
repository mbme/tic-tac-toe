import * as types from '../constants/ActionTypes';

import * as CONST from '../constants';

function emptyMatrix() {
  const rows = [];

  for (let i = 0; i < CONST.MATRIX_SIZE; i += 1) {
    const row = [];
    for (let j = 0; j < CONST.MATRIX_SIZE; j += 1) {
      row.push(CONST.EMPTY_CELL);
    }

    rows.push(row);
  }

  return rows;
}

export default function (state = emptyMatrix(), action) {
  switch (action.type) {
    case types.NEW_GAME:
      return emptyMatrix();
    default:
      return state;
  }
}
