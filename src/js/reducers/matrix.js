import * as types from '../constants/ActionTypes';

import * as CONST from '../constants';

// NOTE: matrix is an array of rows
//       row is an array of elements

/**
 * Generate empty matrix;
 */
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

/**
 * Immutable cell update: returns new matrix with updated cell value.
 */
function updateCell(matrix, row, col, value) {
  const oldRow = matrix[row];

  const newRow = [...oldRow.slice(0, col), value, ...oldRow.slice(col + 1)];

  return [
    ...matrix.slice(0, row),
    newRow,
    ...matrix.slice(row + 1),
  ];
}

export default function (state = emptyMatrix(), action) {
  switch (action.type) {
    case types.RESET_GRID:
      return emptyMatrix();

    case types.MARK_CELL:
      return updateCell(state, action.row, action.col, action.turnType);

    default:
      return state;
  }
}
