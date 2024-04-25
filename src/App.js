
import './App.css';
import { useState, useEffect } from 'react';
import Square from "./Components/Square";
import { Patterns } from './Patterns';

function App() {
  const [board, setBoard] = useState(["", "", "","", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({winner:"none" ,state:"none"});

  useEffect(() =>{
    checkWin();
    checkIfTie();
    if(player == "X"){
      setPlayer("O")
    }else{
      setPlayer("X")
    }

  }, [board]);

  useEffect(() =>{
    if(result.state != "none"){
      alert(`Game Finished! Winning Player: ${result.winner}`);
    }
  },[result])

  const selectSquare = (square) =>{
    setBoard(board.map((val, idx) =>{
      if(idx == square && val == ""){
        return player
      }

      return val;
    })
    );

  };

  const checkWin = () => {
    Patterns.forEach((currPattern) =>{
      const firstPlayer = board[currPattern[0]];
      if(firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if(board[idx] != firstPlayer){
          foundWinningPattern = false;
        }
      })

      if(foundWinningPattern){
        setResult({winner:player , state: "Won"})
      }
    })
  };
  
  const checkIfTie = () =>{
    let filled = true;
    board.forEach((square) =>{
      if (square == ""){
        filled = false;
      }
    });

    if (filled){
      setResult({winner: "No One", state: "Tie"});
    }
  }

  return (
    <div className="App">
      <div className='board'>
      <div className='row'>
        <Square 
          val={board[0]} 
          chooseSquare={() => {
            selectSquare(0);
          }}
          />
          <Square 
          val={board[1]} 
          chooseSquare={() => {
            selectSquare(1);
          }}
          />
          <Square 
          val={board[2]} 
          chooseSquare={() => {
            selectSquare(2);
          }}
          />
      </div>
      <div className='row'>
      <Square 
          val={board[3]} 
          chooseSquare={() => {
            selectSquare(3);
          }}
          />
          <Square 
          val={board[4]} 
          chooseSquare={() => {
            selectSquare(4);
          }}
          />
          <Square 
          val={board[5]} 
          chooseSquare={() => {
            selectSquare(5);
          }}
          />
      </div>
      <div className='row'>
      <Square 
          val={board[6]} 
          chooseSquare={() => {
            selectSquare(6);
          }}
          />
          <Square 
          val={board[7]} 
          chooseSquare={() => {
            selectSquare(7);
          }}
          />
          <Square 
          val={board[8]} 
          chooseSquare={() => {
            selectSquare(8);
          }}
          />
      </div>
      </div>
    </div>
  );
}

export default App;
