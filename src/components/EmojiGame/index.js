import {Component} from 'react'
import RulesView from './RulesView'
import NavBar from './NavBar'
import EmojiCard from './EmojiCard'
import ResultCard from './ResultCard'
import BackModeView from './BackModeView'
import './index.css'

const apiStatesConstance = {
  initial: 'Initial',
  game_view: 'GameView',
}

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    apiStates: apiStatesConstance.initial,
    clickedEmojisList: [],
    gameInProgress: true,
    topScore: 0,
    modelOpen: false,
  }
  finishGame = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, gameInProgress: false})
  }
  clickEmoji = id => {
    const {clickedEmojisList} = this.state
    const emojiPresent = clickedEmojisList.includes(id)
    if (emojiPresent) {
      this.finishGame(clickedEmojisList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojisList.length) {
        this.finishGame(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getRandomEmojisList = () => {
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const randomEmojiList = this.getRandomEmojisList()
    return (
      <>
        <ul className="emoji-card-container">
          {randomEmojiList.map(eachItem => (
            <EmojiCard
              key={eachItem.id}
              emojiDetails={eachItem}
              clickEmoji={this.clickEmoji}
            />
          ))}
        </ul>
      </>
    )
  }
  resetGame = () => {
    this.setState({clickedEmojisList: [], gameInProgress: true})
  }
  resultView = () => {
    const {clickedEmojisList} = this.state
    const won = clickedEmojisList.length === emojisList.length
    return (
      <ResultCard
        isWon={won}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }
  onClickRules = () => {
    this.setState({modelOpen: true})
  }

  onClickClose = () => {
    this.setState({modelOpen: false})
  }

  gameView = () => {
    const {clickedEmojisList, gameInProgress, topScore, modelOpen} = this.state
    return (
      <div className="emoji-bg-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          gameInProgress={gameInProgress}
          topScore={topScore}
        />
        <BackModeView
          onClickRules={this.onClickRules}
          onClickClose={this.onClickClose}
          modelOpen={modelOpen}
        />
        <div className="emoji-body-container">
          {gameInProgress ? this.renderEmojiList() : this.resultView()}
        </div>
      </div>
    )
  }
  onclickStart = () => {
    this.setState({apiStates: apiStatesConstance.game_view})
  }
  rulesView = () => <RulesView gameStart={this.onclickStart} />

  render() {
    const {apiStates} = this.state
    switch (apiStates) {
      case apiStatesConstance.initial:
        return this.rulesView()
      case apiStatesConstance.game_view:
        return this.gameView()
      default:
        return null
    }
  }
}
export default EmojiGame
