import React, { useState } from 'react';
import './App.css';
import { utils } from './utils';
import Row from './Row';

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

  const updateTable = function(value: number, row: number, column: number) {
    let newTable = table.map(function(arr) {
      return arr.slice();
    });
    newTable[row][column] = value;
    setTable(newTable);
  }                                      

  const rowErrors = utils.checkRows(table);

  return (
    <table>
        <caption>Sudoku</caption>
        <colgroup><col/><col/><col/></colgroup>
        <colgroup><col/><col/><col/></colgroup>
        <colgroup><col/><col/><col/></colgroup>
        {utils.range(0, 2).map(groupId => (
          <tbody key={groupId}>
            {utils.range(0, 2).map(rowId => (
              <Row 
                key={rowId} 
                row={table[groupId*3+rowId]} 
                valueChanged={(value, columnId) => updateTable(value, groupId*3+rowId, columnId)}
                rowError={rowErrors[groupId*3+rowId]}/>
            ))}
          </tbody>
        ))}
  </table>
  );
}

export default App;
