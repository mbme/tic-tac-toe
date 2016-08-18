import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid from '../components/Grid';

const App = ({ matrix }) => (
  <div>
    <h1>Hello WORLD!</h1>
    <Grid matrix={matrix} />
  </div>
);

function mapStateToProps({ matrix }) {
  return {
    matrix,
  };
}

App.propTypes = {
  matrix: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps
)(App);
