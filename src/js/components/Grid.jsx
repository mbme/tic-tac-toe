import React, { PropTypes } from 'react';
import { X_CELL, O_CELL } from '../constants/CellTypes';

const Grid = ({ matrix, onClick }) => (
  <table>
    <thead />
    <tbody>
      {
        matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {
              row.map((cell, colIndex) => {
                let isEmpty = false;
                let className;
                if (cell === X_CELL) {
                  className = 'x-cell';
                } else if (cell === O_CELL) {
                  className = 'o-cell';
                } else {
                  className = 'empty-cell';
                  isEmpty = true;
                }

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
