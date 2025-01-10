import {useState, useEffect} from 'react'
import RulesView from './RulesView'
import BackModeView from './BackModeView'
import ResultView from './ResultView'
import './index.css'

const apiStatesConstance = {
  initial: 'Initial',
  game_view: 'GameView',
  result_view: 'ResultView',
}

const MemoryMatrix = () => {
  const [apiStates, setApiStates] = useState(apiStatesConstance.initial)
  const [gameLevel, setGameLevel] = useState(0)
  const [matrixSize, setMtrixSize] = useState(0)
  const [highlightedCells, sethighlightedCells] = useState([])
  const [userSelection, setUserSelection] = useState([])
  const [isMemorization, setIsMemorization] = useState(true)
  const [modelOpen, setModelOpen] = useState(false)

  const onClickClose = () => {
    setModelOpen(false)
  }
  const onClickRules = () => {
    setModelOpen(true)
  }
  const generateRandomButtons = (totelCells, count) => {
    const highlighted = new Set()
    while (highlighted.size < count) {
      const random = Math.floor(Math.random() * totelCells)
      highlighted.add(random)
    }

    return Array.from(highlighted)
  }
  const initializeGame = () => {
    const gridSize = gameLevel + 2
    setMtrixSize(gridSize)
    const totelCells = gridSize * gridSize
    const highlighted = generateRandomButtons(totelCells, gridSize)
    sethighlightedCells(highlighted)
    setUserSelection([])
    setIsMemorization(false)

    const timeOut = setTimeout(() => {
      setIsMemorization(true)
    }, gridSize * 1000)
    return () => clearTimeout(timeOut)
  }

  const handleBoxClick = index => {
    if (!isMemorization) return

    if (highlightedCells.includes(index)) {
      if (!userSelection.includes(index)) {
        const updateSelected = [...userSelection, index]
        setUserSelection(updateSelected)

        if (updateSelected.length === highlightedCells.length) {
          const nextLevel = gameLevel + 1
          setGameLevel(nextLevel)
          sethighlightedCells([])
          setUserSelection([])
          setIsMemorization(false)
          initializeGame()
        }
      }
    } else {
      setApiStates(apiStatesConstance.result_view)
    }
  }

  const gameView = () => {
    console.log(highlightedCells, matrixSize)
    return (
      <div className="memory-bg-container">
        <BackModeView
          onClickRules={onClickRules}
          onClickClose={onClickClose}
          modelOpen={modelOpen}
        />
        <h1 className="memory-heading">Memory Matrix</h1>
        <p>Level - {gameLevel}</p>
        <ul
          className="memory-tiles-list"
          style={{
            gridTemplateColumns: `repeat(${matrixSize},1fr)`,
            gridTemplateRows: `repeat(${matrixSize},1fr)`,
          }}
        >
          {Array.from({length: matrixSize * matrixSize}).map((_, index) => {
            const testId = highlightedCells.includes(index)
              ? 'highlighted'
              : 'notHighlighted'
            const memoryClass =
              highlightedCells.includes(index) && !isMemorization
                ? 'highlighted'
                : ''
            const selectclass =
              userSelection.includes(index) && isMemorization
                ? 'highlighted'
                : ''

            return (
              <li className="cell" key={`${index + gameLevel}`}>
                <button
                  type="button"
                  aria-label="cell"
                  className={`cell ${memoryClass} ${selectclass} `}
                  onClick={() => handleBoxClick(index)}
                  data-testid={testId}
                ></button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const startGame = () => {
    setApiStates(apiStatesConstance.game_view)
    setGameLevel(gameLevel + 1)
  }

  const onClickPlayAgain = () => {
    setApiStates(apiStatesConstance.game_view)
    setGameLevel(gameLevel)
    sethighlightedCells([])
    setUserSelection([])
    setIsMemorization(false)
    initializeGame()
  }

  const resultView = () => (
    <ResultView onClickPlayAgain={onClickPlayAgain} gameLevel={gameLevel} />
  )

  const rulesView = () => <RulesView startGame={startGame} />

  const checkrender = () => {
    switch (apiStates) {
      case apiStatesConstance.initial:
        return rulesView()
      case apiStatesConstance.game_view:
        return gameView()
      case apiStatesConstance.result_view:
        return resultView()
      default:
        return null
    }
  }
  useEffect(() => {
    if (apiStates === apiStatesConstance.game_view) {
      initializeGame()
    }
  }, [apiStates, gameLevel])

  return <>{checkrender()}</>
}
export default MemoryMatrix
