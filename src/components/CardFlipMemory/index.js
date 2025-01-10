import {useState, useEffect} from 'react'

import RulesView from './RulesView'
import BackModalView from './BackModalView'
import CardListItem from './CardListItem'

import './index.css'

const apiStatesConstance = {
  initial: 'Initial',
  game_view: 'GameView',
  result: 'Result',
}
const cardsData = [
  {
    id: 1,
    isMatched: false,
    isflipped: false,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 2,
    isMatched: false,
    isflipped: false,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 3,
    isMatched: false,
    isflipped: false,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 4,
    isMatched: false,
    isflipped: false,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 5,
    isMatched: false,
    isflipped: false,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: 6,
    isMatched: false,
    isflipped: false,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 7,
    isMatched: false,
    isflipped: false,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 8,
    isMatched: false,
    isflipped: false,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 9,
    isMatched: false,
    isflipped: false,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 10,
    isMatched: false,
    isflipped: false,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
  {
    id: 11,
    isMatched: false,
    isflipped: false,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 12,
    isMatched: false,
    isflipped: false,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 13,
    isMatched: false,
    isflipped: false,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 14,
    isMatched: false,
    isflipped: false,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 15,
    isMatched: false,
    isflipped: false,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: 16,
    isMatched: false,
    isflipped: false,

    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 17,
    isMatched: false,
    isflipped: false,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 18,
    isMatched: false,
    isflipped: false,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 19,
    isMatched: false,
    isflipped: false,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 20,
    isMatched: false,
    isflipped: false,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

const CardFlipMemory = () => {
  const [apiStates, setApiStates] = useState(apiStatesConstance.initial)
  const [modalOpen, setModalOpen] = useState(false)
  const [time, setTime] = useState(120)
  const [score, setScore] = useState(0)
  const [flipCount, setFlipCount] = useState(0)
  const [cards, setCards] = useState([])
  const [lockBoard, setLockBoard] = useState(false)
  const [firstCard, setFirstCard] = useState(null)

  const shuflledCardes = () => {
    const shuffledCards = [...cardsData].sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
  }
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const resetBoard = () => {
    setFirstCard(null)
    setLockBoard(false)
  }

  const onHandler = (index, id) => {
    const cardItem = cards[index]
    if (lockBoard || cardItem.isflipped) return
    if (!firstCard) {
      setFirstCard(cardItem)
      setCards(
        cards.map(card => (card.id === id ? {...card, isflipped: true} : card)),
      )

      return
    }

    setCards(
      cards.map(card => (card.id === id ? {...card, isflipped: true} : card)),
    )
    setLockBoard(true)

    if (firstCard.name === cardItem.name) {
      if (score === 9) {
        setScore(prev => prev + 1)
        setFlipCount(prev => prev + 1)
        setApiStates(apiStatesConstance.result)
      } else {
        setCards(
          cards.map(card =>
            card.name === cardItem.name ? {...card, isMatched: true} : card,
          ),
        )
        if (!lockBoard) {
          setFlipCount(prev => prev + 1)
        }
        setScore(prev => prev + 1)
        resetBoard()
      }
    } else {
      setTimeout(() => {
        setCards(
          cards.map(card =>
            card.id === cardItem.id || card.id === firstCard.id
              ? {...card, isflipped: false}
              : card,
          ),
        )
        if (!lockBoard) {
          setFlipCount(prev => prev + 1)
        }
        resetBoard()
      }, 2000)
    }
  }

  const gameView = () => {
    const minites = Math.floor(time / 60)
    const min = minites < 10 ? `0${minites}` : minites
    const seconed = time % 60
    const sec = seconed < 10 ? `0${seconed}` : seconed
    console.log(cards)
    return (
      <div className="cfm-game-view">
        <BackModalView
          modalOpen={modalOpen}
          onClickRules={openModal}
          onClickClose={closeModal}
        />
        <div className="cfm-body-container">
          <h1 className="cfm-heading">Card-Flip Memory Game</h1>
          <div className="cfm-score-container">
            <p>Card flip count - {flipCount}</p>
            <p>
              {min}:{sec}
            </p>
            <p>Score - {score}</p>
          </div>
          <ul className="cfm-card-container">
            {cards.map((card, index) => (
              <CardListItem
                card={card}
                key={card.id}
                indexValue={index}
                onHandler={onHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  const onClickPlayAgain = () => {
    setApiStates(apiStatesConstance.game_view)
    setFirstCard(null)
    setLockBoard(false)
    setFlipCount(0)
    setTime(120)
    setScore(0)
    shuflledCardes()
  }

  const resultView = () => {
    const wonImage =
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733403163/Won_blpzcx.png'
    const loseImage =
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733402409/Lose_njj8ng.png'
    const winOrLose = score === 10 ? true : false
    const image = winOrLose ? wonImage : loseImage
    const imageAlt = winOrLose ? 'grinning face with big eyes' : 'neutral face'
    const result = winOrLose ? 'Congratulations!' : 'Better luck next time'
    const content = winOrLose
      ? 'You matched all of the cards in record time'
      : 'You did not match all of the cards in record time'
    return (
      <div className="cfm-result-container">
        <img className="cfm-result-emoji" alt={imageAlt} src={image} />
        <h1 className="greeting">{result}</h1>
        <p>No.of Flips -{flipCount}</p>
        <h1>{content}</h1>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
    )
  }

  const onClickStart = () => {
    setApiStates(apiStatesConstance.game_view)
  }
  const rulesView = () => <RulesView onClickStart={onClickStart} />

  const checkApiStates = () => {
    switch (apiStates) {
      case apiStatesConstance.initial:
        return rulesView()
      case apiStatesConstance.game_view:
        return gameView()
      case apiStatesConstance.result:
        return resultView()
      default:
        return null
    }
  }
  useEffect(() => {
    shuflledCardes()
  }, [])

  useEffect(() => {
    if (apiStates === apiStatesConstance.game_view) {
      if (time > 0) {
        const intervel = setInterval(() => {
          setTime(prev => prev - 1)
        }, 1000)
        return () => clearInterval(intervel)
      } else if (time === 0) {
        setApiStates(apiStatesConstance.result)
      }
    }
  }, [time, apiStates])

  return <>{checkApiStates()}</>
}
export default CardFlipMemory
