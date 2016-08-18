import { connect } from 'react-redux';
import { getTurnType } from '../selectors/matrix';
import App from '../components/App';
import { markCell } from '../actions/GridActions';

function mapStateToProps(state) {
  return {
    matrix: state.matrix,
    turnType: getTurnType(state),
  };
}

const mapDispatchToProps = {
  onCellMarked: markCell,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
