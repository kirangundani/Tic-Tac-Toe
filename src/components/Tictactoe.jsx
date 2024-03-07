import React, { useState } from 'react'
import './Tictactoe.css'
import Box from './Box'
function Tictactoe() {
  const [input,setINput]=useState(Array(9).fill(null));
  const [isXturn,setIsXturn]=useState(true);
  const checkwinner=()=>{
    const winnerIs=[[0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
  ];

  //checkwinner 
  for(let value of winnerIs){
    //destructuring
    const [a,b,c]=value;
    if(input[a]!==null && input[a]===input[b] && input[a]===input[c]){
      return input[a];
    }
    
  }
  return false;
};
const winner=checkwinner();

const checktie =()=>{
  if(input.every((value)=> value!==null)){
    return (
      <p className='tied'>Match Tied</p>
    )
  }
}
const tie=checktie();


  function handleOnClick(index){
      if(input[index]!==null){
        return;
      }
      const updateInput=[...input]
      updateInput[index]=isXturn?"X":"0";
      setINput(updateInput);
      setIsXturn(!isXturn);
  }
  function handleReset(){
    setINput(Array(9).fill(null));
  }
  return (
    <div className='container'>
    <div className='heading'>Tic Tac Toe</div>

    {(winner && !tie)?
    (<p className='win'>Congratulaton Player {winner} wins!</p>):
    (tie? <p className='tie'>OOP's Match tied</p> : <p className='player'>Current Player is :{isXturn?"X":"0"}</p>)
    }
      <div className='board'>
        <div className='box1'>
          <Box onClick={()=>handleOnClick(0)} value={input[0]}/>
        </div>
        <div className='box2'>
          <Box onClick={()=>handleOnClick(1)} value={input[1]}/>
        </div>
        <div className='box3'>
          <Box onClick={()=>handleOnClick(2)} value={input[2]}/>
        </div>
        <div className='box4'>
          <Box onClick={()=>handleOnClick(3)} value={input[3]}/>
        </div>
        <div className='box5'>
          <Box onClick={()=>handleOnClick(4)} value={input[4]}/>
        </div>
        <div className='box6'>
          <Box onClick={()=>handleOnClick(5)} value={input[5]}/>
        </div>
        <div className='box7'>
          <Box onClick={()=>handleOnClick(6)} value={input[6]}/>
        </div>
        <div className='box8'>
          <Box onClick={()=>handleOnClick(7)} value={input[7]}/>
        </div>
        <div className='box9'>
          <Box onClick={()=>handleOnClick(8)} value={input[8]}/>
        </div>
      </div>
      {
        (winner || tie) &&
        <div className='Play Again'>
          <button className='btn' onClick={handleReset}>Play Again</button>
        </div>
      }
    </div>
  )
}

export default Tictactoe
