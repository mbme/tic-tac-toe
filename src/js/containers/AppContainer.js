import { connect } from 'react-redux';
import { getGameState } from '../selectors/matrix';
import App from '../components/App';
import { markCell, resetGrid } from '../actions/GridActions';

function mapStateToProps(state) {
  return {
    matrix: state.matrix,
    gameState: getGameState(state),
  };
}

const mapDispatchToProps = {
  onCellMarked: markCell,
  onNewGameClicked: resetGrid,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
