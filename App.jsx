import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas) 

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [numOfRoll, setNumOfRoll] = React.useState(0)
    const [lowestRolls, setLowestRolls] = React.useState(parseInt(localStorage.getItem("lowestRolls")) || 0)

    const sides = ['one', 'two', 'three', 'four', 'five', 'six'] 
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    React.useEffect(() => {
        let lowestNum
        if (tenzies) {
            if (lowestRolls === 0) {
                lowestNum = numOfRoll
            } else {
                lowestNum = Math.min(lowestRolls, numOfRoll)
            }
        } else {
            lowestNum = lowestRolls
        }
        setLowestRolls(lowestNum)
        localStorage.setItem("lowestRolls", lowestNum)
    }, [tenzies])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
            setNumOfRoll(prevNumOfRoll => ++prevNumOfRoll)
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setNumOfRoll(0)
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    function restartGame() {
        setTenzies(false)
        setDice(allNewDice())
        setNumOfRoll(0)
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={sides[die.value - 1]} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main>
            { tenzies && <Confetti /> }

            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
            <button 
                className="restart"
                onClick={restartGame}
            >
                Restart
            </button>
            <div className="scores">
                <h4 className="num-of-roll">Number of Rolls: {numOfRoll}</h4>
                <h4 className="lowest-rolls">Best Number of Rolls: {lowestRolls}</h4>
            </div>
            
        </main>
    )
}