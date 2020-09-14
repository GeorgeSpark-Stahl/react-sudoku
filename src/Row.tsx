import React from 'react';
import { utils } from './utils';
import Box from './Box';

type RowProps = {
  row: number[],
  valueChanged: (value: number, column: number) => void 
}

function Row({row, valueChanged}: RowProps) {
  return (
    <tr>
      {utils.range(0, 8).map(columnId => (
        <Box key={columnId} guess={row[columnId]} valueChanged={(number) => valueChanged(number, columnId)}/>
      ))}
    </tr>
  )
}

export default Row;