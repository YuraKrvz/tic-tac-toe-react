import React from 'react';
import './Square.css';

const Square = ({squares, setSquares, number, isXChance, setIsXchance}) => {

   const stepHandler = (i)=> {
      let str = Array.from(squares);
      if(str[i])
         return;
      str[i] = isXChance ? 'x' : 'o';
      setIsXchance(!isXChance);
      setSquares(str)
   }

  return (
    <div onClick={()=> stepHandler(number)} className="square" >
      {squares[number]}
    </div>
  );
}

export default Square;