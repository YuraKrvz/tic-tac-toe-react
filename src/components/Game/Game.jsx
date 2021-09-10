import React, {useState} from 'react';
import Board from '../Board';

const styles = {
   wrapper: {
      margin: '20px auto',
      padding: '0 15px',
      maxWidth: '685px',
   },
   ['modal-btn']: {
      display: 'block',
      marginLeft: '30px',
      marginTop: '20px',
      margin: '25px auto 0 auto',
      width: '200px',
      cursor: 'pointer',
      backgroundColor: 'rgb(84,95,125)',
      border: '2px solid rgba(168,85,193,0.9)',
   },
   body__modal: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right:0,
      minWidth: '60px',
      maxWidth: '740px',
      height: '400px',
      border: '10px solid rgba(168,85,193,0.9)',
      backgroundColor: 'rgb(84,95,125)',
      margin: '90px auto',
      padding: '20px',
   },
   modal: {
      // position: 'relative',
      backgroundColor: 'rgba(0,0,0, .5)',
      textAlign: 'center',
   },
   ['modal-input']: {
      display: 'inline-block',
      margin: '5px',
      width: '200px',
      height: '30px',
      color: '#000',
      backgroundColor: 'rgb(84,95,125)',
      border: '2px solid rgba(168,85,193,0.9)',
      outline: 'none',
   },
};

const Game = ()=> {
  const [showModal, setShowModal] = useState(true);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  
   const handler = (e, number) =>{
      if(number === 1){
         setPlayer1(e.target.value);
      } else {
         setPlayer2(e.target.value);
      }
   }

  return (
    <div className="wrapper">
      <button onClick={()=> setShowModal(!showModal)} style={styles['modal-btn']}>Change name`s</button>
      <Board player1={player1} player2={player2} />
      {showModal && 
         <div style={styles.modal}>
            <div style={styles.body__modal}>
               <h3>Tic tac toe game:</h3>
               <div>
                  <input player1={player1} onChange={(e)=> handler(e,1)} number="1" placeholder="name for player x" style={styles['modal-input']}/>
               </div>
               <div>
                  <input player1={player1} onChange={(e)=> handler(e,2)} number="2" placeholder="name for player o" style={styles['modal-input']}/>
               </div>
               <button onClick={()=> setShowModal(!showModal)} style={styles['modal-btn']}>Play</button>
            </div>
         </div>
      }
    </div>
  );
}

export default Game;