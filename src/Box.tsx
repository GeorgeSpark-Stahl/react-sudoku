import React from 'react';

type BoxProps = {
  guess: number,
  valueChanged: (value: number) => void 
}

function Box({guess, valueChanged}: BoxProps) {
  return (
    <td>
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