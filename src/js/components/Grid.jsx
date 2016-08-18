import React, { PropTypes } from 'react';
import * as CONST from '../constants';

const Grid = ({ matrix, onClick }) => (
  <table>
    <thead />
    <tbody>
      {
        matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {
              row.map((cell, colIndex) => {
                const isEmpty = cell === CONST.EMPTY_CELL;
                const className = isEmpty ? 'is-empty' : '';

                function clickHandler() {
                  if (isEmpty) {
                    onClick(rowIndex, colIndex);
                  }
                }

                return (
                  <td
                    key={colIndex}
                    className={className}
                    onClick={clickHandler}
                  >
                    {cell}
                  </td>
                );
              })
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

Grid.propTypes = {
  matrix: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Grid;
