import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { utils } from './utils';

function App() {
  return (
    <table>
        <caption>Sudoku</caption>
        <colgroup><col/><col/><col/></colgroup>
        <colgroup><col/><col/><col/></colgroup>
        <colgroup><col/><col/><col/></colgroup>
        {utils.range(1, 3).map(groupId => (
          <tbody key={groupId}>
            {utils.range(1, 3).map(rowId => (
              <tr key={rowId}>
                {utils.range(1, 9).map(columnId => (
                  <td key={columnId}>
                    {columnId}
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
