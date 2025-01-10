import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const RulesView = props => {
  const {startGame} = props
  const onClickButton = () => {
    startGame()
  }

  return (
    <div className="rps-bg-container">
      <Link to="/" className="back-link">
        <button type="button" className="back-button">
          <div className="back-arrow">
            <BiArrowBack />
          </div>
          Back
        </button>
      </Link>
      <div className="rps-content-container">
        <div className="rps-image-container">
          <h1>ROCK PAPER SCISSOR</h1>
          <img
            className="rules-image "
            alt="rock paper scissor"
            src="https://res.cloudinary.com/dr2zuyd1r/image/upload/v1732858428/RPS_vt9dj1.png"
          />
        </div>
        <div className="rps-rules-container">
          <h1 className="rules-heading">Rules</h1>
          <ul>
            <li className="list-content">
              The game result should be based on user and user opponent choices
            </li>
            <li className="list-content">
              When the user choice is rock and his opponent choice is rock then
              the result will be <span>IT IS DRAW</span>
            </li>
            <li className="list-content">
              When the user choice is paper and his opponent choice is rock then
              the result will be <span>YOU WON</span>
            </li>
            <li className="list-content">
              When the user choice is a scissor and his opponent choice is rock
              then the result will be <span>YOU LOSE</span>
            </li>
            <li className="list-content">
              When the user choice is paper and his opponent choice is paper
              then the result will be <span>IT IS DRAW</span>
            </li>
            <li className="list-content">
              When the user choice is scissors and his opponent choice is paper
              then the result will be <span>YOU WON</span>
            </li>
            <li className="list-content">
              When the user choice is rock and his opponent choice is scissors
              then the result will be <span>YOU WON</span>
            </li>
            <li className="list-content">
              When the user choice is paper and his opponent choice is scissors
              then the result will be <span>YOU LOSE</span>
            </li>
            <li className="list-content">
              When the user choice is scissors and his opponent choice is
              scissors then the result will be <span>IT IS DRAW</span>
            </li>
            <li className="list-content">
              When the result is <span>YOU WON</span>, then the count of the
              score should be incremented by 1
            </li>
            <li className="list-content">
              When the result is <span>IT IS DRAW</span>, then the count of the
              score should be the same
            </li>
            <li className="list-content">
              When the result is <span>YOU LOSE</span>, then the count of the
              score should be decremented by 1.
            </li>
          </ul>
          <button
            onClick={onClickButton}
            type="button"
            className="rps-start-button"
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )
}
export default RulesView
