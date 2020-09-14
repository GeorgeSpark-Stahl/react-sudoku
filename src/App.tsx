import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { utils } from './utils';

function App() {
  const [table, setTable] = useState([[1,0,0,0,0,0,0,0,0],
                                      [2,0,0,0,0,0,0,0,0],
                                      [3,0,0,0,0,0,0,0,0],
                                      [4,0,0,0,0,0,0,0,0],
                                      [5,0,0,0,0,0,0,0,0],
                                      [6,0,0,0,0,0,0,0,0],
                                      [7,0,0,0,0,0,0,0,0],
                                      [8,0,0,0,0,0,0,0,0],
                                      [9,0,0,0,0,0,0,0,0]]);
  return (
    <table>
        <caption>Sudoku</caption>
        <colgroup><col/><col/><col/></colgroup>
        <colgroup><col/><col/><col/></colgroup>
        <colgroup><col/><col/><col/></colgroup>
        {utils.range(0, 2).map(groupId => (
          <tbody key={groupId}>
            {utils.range(0, 2).map(rowId => (
              <tr key={rowId}>
                {utils.range(0, 8).map(columnId => (
                  <td key={columnId}>
                    <input 
                      value={table[groupId*3+rowId][columnId]}
                      readOnly={true}
                      size={1} >
                    </input>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
  </table>
  );
}

export default App;
