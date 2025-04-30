import { useEffect, useRef, useState } from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid";
import Header from "./components/Header";
import ReactConfetti from "react-confetti";
import GameWon from "./components/GameWon";

export default function App() {
  const [dice, setDice] = useState(()=> generateAllNewDice());
  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value);
  const diceRolled = useRef(0);
  const buttonRef = useRef(null);

  useEffect(()=>{
    if(gameWon) buttonRef.current.focus();
  } , [gameWon]);

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => (
        {
          value: Math.ceil(Math.random() * 6), isHeld: false,
          id: nanoid()
        }
      ))
  }



  const dieList = dice.map((dieObj) => (

    <Die
      key={dieObj.id}
      id={dieObj.id}
      hold = {hold}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
    />
  ))

  function rollDice() {
    if(gameWon){
      setDice(generateAllNewDice());
      diceRolled.current = 0;
    }else{
      setDice(prevDice => {
        return prevDice.map(die =>{
          return die.isHeld? die : {...die, value: Math.ceil(Math.random() * 6)}
        })
      });
      diceRolled.current++;
    }
  }

  function hold(id){
    // console.log(id);
    setDice(prevDice => {
      return prevDice.map(die => {
          return die.id === id? {...die , isHeld: !die.isHeld} : die;
      })
    })
    
  }

  return (
    <main>
      {gameWon && 
      <ReactConfetti
      width = {window.innerWidth}
      height={window.innerHeight}
      />}

      <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
          </div>
      <Header/>
      <div className="dice-container">
        {gameWon? <GameWon diceRolled = {diceRolled}/>: dieList}
      </div>

      <button ref={buttonRef} onClick={rollDice} className="roll-btn">{gameWon? "New Game": "Roll"}</button>
    </main>
  )
}