import React from 'react';
import { TURN } from '../prop-types';

const ControlPanel = ({ turnType }) => (
  <h1>{ turnType } TURN!</h1>
);

ControlPanel.propTypes = {
  turnType: TURN,
};

export default ControlPanel;
