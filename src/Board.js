import React from 'react';

const Board = ({squares, onClick}) => {
  return(
    <div className = "board">
      {squares.map((sqaure,i)=>(
        <button key={i} className = "squares" onClick = {()=> onClick(i)}>{squares[i]}</button>
      ))}
    </div>
  )
}

export default Board;