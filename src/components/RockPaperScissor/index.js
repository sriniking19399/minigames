import {Component} from 'react'
import RulesView from './RulesView'
import ChoiceItem from './ChoiceItem'
import ResultView from './ResultView'
import BackModalView from './BackModalView'

import './index.css'

const apiStatesConstance = {
  initial: 'Initial',
  game_view: 'GameView',
  result_view: 'ResultView',
}
const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissor extends Component {
  state = {
    apiStates: apiStatesConstance.initial,
    userChoice: null,
    computerChoice: null,
    resultText: '',
    score: 0,
    modalOpen: false,
  }

  onClickStart = () => {
    this.setState({apiStates: apiStatesConstance.game_view})
  }

  rulesView = () => <RulesView startGame={this.onClickStart} />

  getSelectChoice = id => {
    const [selectItem] = choicesList.filter(eachItem => eachItem.id === id)
    const randimItem =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    if (selectItem.id === randimItem.id) {
      this.setState({
        resultText: 'IT IS DRAW',
        apiStates: apiStatesConstance.result_view,
        userChoice: selectItem,
        computerChoice: randimItem,
      })
    } else if (
      (selectItem.id === 'scissor' && randimItem.id === 'paper') ||
      (selectItem.id === 'rock' && randimItem.id === 'scissor') ||
      (selectItem.id === 'paper' && randimItem.id === 'rock')
    ) {
      this.setState(prevState => ({
        resultText: 'YOU WON',
        userChoice: selectItem,
        computerChoice: randimItem,
        score: prevState.score + 1,
        apiStates: apiStatesConstance.result_view,
      }))
    } else {
      this.setState(prevState => ({
        resultText: 'YOU LOSE',
        score: prevState.score - 1,
        apiStates: apiStatesConstance.result_view,
        userChoice: selectItem,
        computerChoice: randimItem,
      }))
    }
  }
  onClickPlayAgain = () => {
    this.setState({apiStates: apiStatesConstance.game_view})
  }

  resultView = () => {
    const {computerChoice, userChoice, score, resultText} = this.state
    return (
      <ResultView
        computerChoice={computerChoice}
        userChoice={userChoice}
        score={score}
        resultText={resultText}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }
  onClickRules = () => {
    this.setState({modalOpen: true})
  }
  onClickClose = () => {
    this.setState({modalOpen: false})
  }
  gameView = () => {
    const {modalOpen} = this.state
    return (
      <div className="rps-bg-container">
        <BackModalView
          onClickRules={this.onClickRules}
          onClickClose={this.onClickClose}
          modalOpen={modalOpen}
        />
        <div className="rpc-body-container">
          <h1>Rock Paper Scissor</h1>
          <h1>Let's pick</h1>
          <ul className="rpc-choices-container">
            {choicesList.map(eachItem => (
              <ChoiceItem
                getSelectChoice={this.getSelectChoice}
                key={eachItem.id}
                listItem={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {apiStates} = this.state
    switch (apiStates) {
      case apiStatesConstance.initial:
        return this.rulesView()
      case apiStatesConstance.game_view:
        return this.gameView()
      case apiStatesConstance.result_view:
        return this.resultView()
      default:
        return null
    }
  }
}
export default RockPaperScissor
