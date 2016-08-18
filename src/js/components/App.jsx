import React, { PropTypes } from 'react';
import Grid from '../components/Grid';
import ControlPanel from '../components/ControlPanel';
import { STATES, X_TURN, O_TURN } from '../constants/GameStates';
import { X_CELL, O_CELL } from '../constants';

const App = ({ matrix, onCellMarked, gameState }) => {
  function onClick(row, col) {
    if (gameState === X_TURN) {
      onCellMarked(row, col, X_CELL);
    }

    if (gameState === O_TURN) {
      onCellMarked(row, col, O_CELL);
    }
  }

  return (
    <div>
      <ControlPanel gameState={gameState} />

      <Grid matrix={matrix} onClick={onClick} />
    </div>
  );
};

App.propTypes = {
  matrix: PropTypes.array.isRequired,
  onCellMarked: PropTypes.func.isRequired,
  gameState: PropTypes.oneOf(STATES).isRequired,
};

export default App;
