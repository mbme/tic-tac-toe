import * as types from '../constants/ActionTypes';

export function markCell(row, col, turnType) {
  return {
    type: types.MARK_CELL,
    row,
    col,
    turnType,
  };
}

export function resetGrid() {
  return {
    type: types.RESET_GRID,
  };
}
