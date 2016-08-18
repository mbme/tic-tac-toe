import React, { PropTypes } from 'react';
import * as states from '../constants/GameStates';

const ControlPanel = ({ gameState }) => {
  switch (gameState) {
    case states.X_TURN:
      return (<h1>X TURN!</h1>);
    case states.O_TURN:
      return (<h1>O TURN!</h1>);
    case states.DRAW:
      return (<h1>DRAW!</h1>);
    case states.X_WON:
      return (<h1>X WON!</h1>);
    case states.O_WON:
      return (<h1>O WON!</h1>);
    default:
      throw new Error(`unexpected state ${gameState}`);
  }
};

ControlPanel.propTypes = {
  gameState: PropTypes.oneOf(states.STATES).isRequired,
};

export default ControlPanel;
