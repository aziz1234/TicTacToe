import React, {useState, useRef} from 'react';
import './App.css';
import Board from './Board.js'

function App() {
  const[square,setSquare] = useState(Array(9).fill(null))
  const[isCurrentPlayerX, setNextPlayer] = useState(true);
  const turns = useRef(0);

   const isWinner = () =>{
    const wins = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(var i=0;i<wins.length;i++){
      const [a,b,c] = wins[i];
      if(square[a]&&
        square[a]===square[b]&&
        square[b]===square[c])
          return square[a]
    }
    return null;  
  }

  const winner = isWinner()
  
  const onClick = (sqNo) =>{
    const copy = [...square];
    if(square[sqNo]||isWinner())
      return;
    copy[sqNo] = isCurrentPlayerX ? "X" : "O";
    setSquare(copy);
    turns.current = turns.current + 1;
    setNextPlayer(!isCurrentPlayerX);
  }

  return (
    <div className="App">
      <h2>Tic Tac Toe Game</h2>
      <Board squares={square} onClick= {onClick}/>
      <h2>{winner ? `Yay!! the winner is ${winner}`:(turns.current === 9 ? "It's a Draw" : "") }</h2>
      <button className="NewGame" onClick = {()=>{setSquare(Array(9).fill(null))
      turns.current=0}}>New Game ?</button>
    </div>
  );
}

export default App;
