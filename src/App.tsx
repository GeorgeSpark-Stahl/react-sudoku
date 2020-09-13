import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <table>
        <caption>Sudoku</caption>
        <colgroup><col/><col/><col/></colgroup>
        <colgroup><col/><col/><col/></colgroup>
        <colgroup><col/><col/><col/></colgroup>
        <tbody>
        <tr><td>1</td><td> </td><td>3</td><td>6</td><td></td><td>4</td><td>7</td><td></td><td>9</td></tr>
        <tr><td></td><td>2</td><td> </td><td></td><td>9</td><td></td><td> </td><td>1</td><td></td></tr>
        <tr><td>7</td><td> </td><td></td><td></td><td></td><td></td><td></td><td></td><td>6</td></tr>
        </tbody>
        <tbody>
        <tr><td>2</td><td></td><td>4</td><td></td><td>3</td><td></td><td>9</td><td></td><td>8</td></tr>
        <tr><td></td><td></td><td></td><td></td><td> </td><td></td><td></td><td></td><td></td></tr>
        <tr><td>5</td><td> </td><td> </td><td>9 </td><td> </td><td>7</td><td> </td><td> </td><td>1</td></tr>
        </tbody>
        <tbody>
        <tr><td>6</td><td> </td><td> </td><td> </td><td>5</td><td> </td><td> </td><td> </td><td>2</td></tr>
        <tr><td></td><td></td><td></td><td></td><td>7</td><td> </td><td> </td><td> </td><td></td></tr>
        <tr><td>9</td><td>  </td><td>  </td><td>8 </td><td> </td><td>2 </td><td>  </td><td> </td><td>5</td></tr>
        </tbody>
  </table>
  );
}

export default App;
