import React from 'react';

type BoxProps = {
  guess: number,
  valueChanged: (value: number) => void ,
  rowError: number,
}

function Box({guess, valueChanged, rowError}: BoxProps) {
  return (
    <td style={{backgroundColor: rowError === guess ? 'red': 'transparent'}}>
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