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
  const colErrors = utils.checkColumns(table);
  const quadErrors = utils.checkQuadrants(table);

  const adjusted = [
    [quadErrors[0], quadErrors[1], quadErrors[2]],
    [quadErrors[3], quadErrors[4], quadErrors[5]],
    [quadErrors[6], quadErrors[7], quadErrors[8]]
  ];

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
                rowError={rowErrors[groupId*3+rowId]}
                colErrors={colErrors}
                rowQuadErrors={adjusted[groupId]}/>
            ))}
          </tbody>
        ))}
  </table>
  );
}

export default App;
