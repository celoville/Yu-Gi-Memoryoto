import { useEffect, useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import SingleCard from './components/SingleCard'
import YouLose from './components/YouLose'

const cardImages = [
  { "src": "/img/cards/blue_eyes.jpg", matched: false },
  { "src": "/img/cards/pot_of_greed.webp", matched: false },
  { "src": "/img/cards/obelisk.jpg" , matched: false},
  { "src": "/img/cards/slipher.jpg", matched: false },
  { "src": "/img/cards/ra.jpg", matched: false },
  { "src": "/img/cards/dark_magician.jpg" , matched: false},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // this sets the choices
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [turnCount, setTurnCount] = useState(0)
  // shuffle card function
  const shuffleCards = () => {
    const shuffleDCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleDCards)
    setTurns(0)
    setTurnCount(0)

  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

// this will compare the cards
  useEffect(() => {
    if(choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else{
              return card
            }
          })
        })

        // console.log("Those cards MATCH!!")
        setTimeout(() => resetTurn(), 500) 

      } else {
        // console.log("No Match.")
        setTimeout(() => resetTurn(), 500) 
      }
      setTurnCount(turnCount +1)
    }

    // this will reset the turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)

  }

  },[choiceOne, choiceTwo])


  console.log(cards)

  return (
    <div className="App">
      <h1>Heart of the Cards</h1>
      <button onClick={shuffleCards}>Let's Duel</button>
      <Counter turnCount={turnCount} />
      <div className='card-grid' >
        {cards.map(card => (
          <SingleCard
            handleChoice={handleChoice}
            key={card.id}
            card={card}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            // disable={}
          />
        ))}


      </div>

      {
        turnCount > 18 &&

        <YouLose shuffleCards={shuffleCards}/>

      }

    </div>
  );
}

export default App

