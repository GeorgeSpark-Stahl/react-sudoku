import React from 'react';
import { utils } from './utils';
import Box from './Box';

type RowProps = {
  row: number[],
  valueChanged: (value: number, column: number) => void,
  rowError: number;
  colErrors: number[];
}

function Row({row, valueChanged, rowError, colErrors}: RowProps) {
  return (
    <tr>
      {utils.range(0, 8).map(columnId => (
        <Box 
          key={columnId} 
          guess={row[columnId]} 
          valueChanged={(number) => valueChanged(number, columnId) }
          rowError={rowError}
          colError={colErrors[columnId]}/>
      ))}
    </tr>
  )
}

export default Row;