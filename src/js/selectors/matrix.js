import * as CONST from '../constants';
import * as states from '../constants/GameStates';

function countMarkedCells(matrix) {
  let markedCells = 0;

  matrix.forEach(row => {
    row.forEach(cell => {
      if (cell !== CONST.EMPTY_CELL) {
        markedCells += 1;
      }
    });
  });

  return markedCells;
}

/**
 * X turn or O turn.
 */
function getTurnType(matrix) {
  const markedCells = countMarkedCells(matrix);

  // even number of marked cells means X turn, odd means O turn
  return markedCells % 2 === 0 ? states.X_TURN : states.O_TURN;
}

function hasEmptyCells(matrix) {
  return countMarkedCells(matrix) < CONST.MATRIX_SIZE * CONST.MATRIX_SIZE;
}

/**
 * Check if line consists of similar (non-empty) cells.
 * Returns cell or null.
 */
function checkLine(line) {
  const firstCell = line[0];

  if (firstCell === CONST.EMPTY_CELL) {
    return null;
  }

  for (let i = 1; i < line.length; i += 1) {
    if (line[i] !== firstCell) {
      return null;
    }
  }

  return firstCell;
}

function getColumn(matrix, columnIndex) {
  const column = [];
  for (let i = 0; i < matrix.length; i += 1) {
    column.push(matrix[i][columnIndex]);
  }

  return column;
}

/**
 * Returns the winner or null if there is no winner.
 */
function getWinner(matrix) {
  // check rows
  for (let i = 0; i < matrix.length; i += 1) {
    const result = checkLine(matrix[i]);
    if (result) {
      return result;
    }
  }

  // check cols
  for (let i = 0; i < matrix.length; i += 1) {
    const result = checkLine(getColumn(matrix, i));
    if (result) {
      return result;
    }
  }

  // check diagonal
  const diag1 = [];
  const diag2 = [];

  for (let i = 0; i < matrix.length; i += 1) {
    diag1.push(matrix[i][i]);
    diag2.push(matrix[i][matrix.length - 1 - i]);
  }

  return checkLine(diag1) || checkLine(diag2);
}

export function getGameState({ matrix }) {
  const winner = getWinner(matrix);
  if (winner === CONST.X_CELL) {
    return states.X_WON;
  }

  if (winner === CONST.O_CELL) {
    return states.O_WON;
  }

  if (!hasEmptyCells(matrix)) {
    return states.DRAW;
  }

  return getTurnType(matrix);
}
