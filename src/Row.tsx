import React from 'react';
import { utils } from './utils';

type RowProps = {
  row: number[],
}

function Row({row}: RowProps) {
  return (
    <>
      <tr>
        {utils.range(0, 8).map(columnId => (
          <td key={columnId}>
            <input 
              value={row[columnId] > 0 ? row[columnId]: ''}
              readOnly={true}
              size={1} >
            </input>
          </td>
        ))}
      </tr>
    </>
  )
}

export default Row;