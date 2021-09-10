import React, {useState, useEffect} from 'react';
import './Board.css';
import Square from '../Square';

let initialState = new Array(9).fill('')

const Board = ({player1, player2})=> {
   const [squares, setSquares] = useState(initialState);
   const [isXChance, setIsXchance] = useState(true);
   const [scoreX, setScoreX] = useState(0);
   const [scoreO, setScoreO] = useState(0);
   
   useEffect(()=>{
    let win = findWinner();
    if(win === 'x'){
      setScoreX(scoreX + 1)
      alert('X are winner')
      setSquares(initialState)
    } else if(win === 'o'){
      setScoreO(scoreO + 1)
      alert('O are winner')
      setSquares(initialState)
    } else if(win === 'empty'){
      alert('won a draw')
      setSquares(initialState)
    }
   }, [squares]);

   const findWinner = ()=> {
    const containsEmpty = (arr) => [].concat(arr).sort().reverse().pop() === "";

    const variations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i=0; i < variations.length; i++){
      const [a,b,c] = variations[i];

      if(!containsEmpty(squares)){
        return 'empty'
      }
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }   
    } return null;
   }
   
  return (
    <>
      <button onClick={ ()=>{
        setScoreX(0);
        setScoreO(0);
      }} className="board-btn">reset an account</button>
      <div className="container">
         <div className="wrapper-board">
          <div className="board">
            <div className="board-row">
                {squares.map((square, index)=> (
                  <Square 
                      squares={squares} 
                      setSquares={setSquares} 
                      isXChance={isXChance} 
                      setIsXchance={setIsXchance} 
                      number={index} 
                      key={index}
                  />
                ))}
            </div>
          </div>
          <div className="table-game">
            <p>Score</p>
            <p>Player {player1}: {scoreX}</p>
            <p>Player {player2}: {scoreO}</p>
          </div>
         </div>
      </div>
    </>
  );
}
export default Board;