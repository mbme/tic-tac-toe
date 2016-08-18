import React, { PropTypes } from 'react';

const Grid = ({ matrix }) => (
  <table>
    <thead />
    <tbody>
      {
        matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {
              row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

Grid.propTypes = {
  matrix: PropTypes.array.isRequired,
};

export default Grid;
