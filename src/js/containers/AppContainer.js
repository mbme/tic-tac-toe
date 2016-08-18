import { connect } from 'react-redux';
import { getGameState } from '../selectors/matrix';
import App from '../components/App';
import { markCell } from '../actions/GridActions';

function mapStateToProps(state) {
  return {
    matrix: state.matrix,
    gameState: getGameState(state),
  };
}

const mapDispatchToProps = {
  onCellMarked: markCell,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
