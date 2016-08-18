import React, { PropTypes } from 'react';
import Grid from '../components/Grid';
import ControlPanel from '../components/ControlPanel';
import { TURN } from '../prop-types';

const App = ({ matrix, turnType, onCellMarked }) => (
  <div>
    <ControlPanel turnType={turnType} />

    <Grid matrix={matrix} onClick={(row, col) => onCellMarked(row, col, turnType)} />
  </div>
);

App.propTypes = {
  matrix: PropTypes.array.isRequired,
  turnType: TURN,
  onCellMarked: PropTypes.func.isRequired,
};

export default App;
