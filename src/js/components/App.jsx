import React, { PropTypes } from 'react';
import Grid from '../components/Grid';
import ControlPanel from '../components/ControlPanel';
import { STATES, FINISHED_STATES, X_TURN, O_TURN } from '../constants/GameStates';
import { X_CELL, O_CELL } from '../constants/CellTypes';

const App = ({ matrix, onCellMarked, onNewGameClicked, gameState }) => {
  function onClick(row, col) {
    if (gameState === X_TURN) {
      onCellMarked(row, col, X_CELL);
    }

    if (gameState === O_TURN) {
      onCellMarked(row, col, O_CELL);
    }
  }

  const isFinished = FINISHED_STATES.indexOf(gameState) > -1;
  return (
    <div data-game-state={isFinished ? 'finished' : 'in-progress'}>
      <ControlPanel gameState={gameState} onNewGameClicked={onNewGameClicked} />

      <Grid matrix={matrix} onClick={onClick} />
    </div>
  );
};

App.propTypes = {
  matrix: PropTypes.array.isRequired,
  onCellMarked: PropTypes.func.isRequired,
  onNewGameClicked: PropTypes.func.isRequired,
  gameState: PropTypes.oneOf(STATES).isRequired,
};

export default App;
