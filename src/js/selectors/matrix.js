import * as CONST from '../constants';

export function getTurnType(state) {
  let markedCells = 0;

  state.matrix.forEach(row => {
    row.forEach(cell => {
      if (cell !== CONST.EMPTY_CELL) {
        markedCells += 1;
      }
    });
  });

  return markedCells % 2 === 0 ? CONST.X_CELL : CONST.O_CELL;
}
