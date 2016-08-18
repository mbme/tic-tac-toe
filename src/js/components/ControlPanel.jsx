import React, { PropTypes } from 'react';
import * as states from '../constants/GameStates';

const ControlPanel = ({ gameState, onNewGameClicked }) => {
  let label;
  let showNewGameBtn = true;
  switch (gameState) {
    case states.X_TURN:
      label = 'X TURN!';
      showNewGameBtn = false;
      break;
    case states.O_TURN:
      label = 'O TURN!';
      showNewGameBtn = false;
      break;
    case states.DRAW:
      label = 'DRAW!';
      break;
    case states.X_WON:
      label = 'X WON!';
      break;
    case states.O_WON:
      label = 'O WON!';
      break;
    default:
      throw new Error(`unexpected state ${gameState}`);
  }

  return (
    <div className="ControlPanel">
      <h1>{label}</h1>
      <button onClick={onNewGameClicked} className={showNewGameBtn ? '' : 'hidden'}>
        NEW GAME
      </button>
    </div>
  );
};

ControlPanel.propTypes = {
  gameState: PropTypes.oneOf(states.STATES).isRequired,
  onNewGameClicked: PropTypes.func.isRequired,
};

export default ControlPanel;
