import React from 'react';
import { getUnpackedSettings } from 'http2';

type BoxProps = {
  guess: number,
  valueChanged: (value: number) => void ,
  rowError: number,
  colError: number
}

function Box({guess, valueChanged, rowError, colError}: BoxProps) {
  const hasError = rowError === guess || colError === guess;
  return (
    <td style={{backgroundColor: hasError ? 'red': 'transparent'}}>
      <input 
        value={guess > 0 ? guess: ''}
        onChange={event => valueChanged(Number(event.target.value))}
        size={1} 
        type="number"
        min="0" 
        max="9">
      </input>
    </td>
  )
}

export default Box;