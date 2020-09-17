import React from 'react';
import { render } from '@testing-library/react';
import Row from './Row';

test('has 9 boxes', () => {
    const table = document.createElement('tbody');
  const { container } = render(<Row 
    row={[1,2,3,4,5,6,7,8,9]} 
    valueChanged={(value, column) => {}} 
    rowError={-1} 
    colErrors={[-1, -1, -1, -1, -1, -1, -1, -1, -1]}
    rowQuadErrors={[-1, -1, -1]}/>,{
    container: document.body.appendChild(table)
 });
  const foo = container.querySelectorAll('td')
  expect(foo).toHaveLength(9);
});