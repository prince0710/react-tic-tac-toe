import React from 'react';
import SquareComponent from './SquareComponent' 
function App() {
  return (
    <div className="app-header">
    <p className="heading-text">Tic-Tac-Toe</p>

    <div className= "row jc-center">
      <SquareComponent/>
      <SquareComponent/>
      <SquareComponent/>
    </div>

    <div className= "row jc-center">
    <SquareComponent/>
    <SquareComponent/>
    <SquareComponent/>
    </div>

    <div className= "row jc-center">
    <SquareComponent/>
    <SquareComponent/>
    <SquareComponent/>
    </div>

    </div>
  );
}

export default App;
