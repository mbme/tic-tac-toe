import { PropTypes } from 'react';
import * as CONST from '../constants';

export const TURN = PropTypes.oneOf([CONST.X_CELL, CONST.O_CELL]).isRequired;
