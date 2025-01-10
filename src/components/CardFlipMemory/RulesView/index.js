import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const RulesView = props => {
  const {onClickStart} = props
  const onClickButton = () => {
    onClickStart()
  }
  return (
    <div className="cfm-bg-container">
      <Link to="/" className="back-link">
        <button type="button" className="back-button">
          <div className="back-arrow">
            <BiArrowBack />
          </div>
          Back
        </button>
      </Link>
      <div className="cfm-content-container">
        <div className="cfm-image-container">
          <img
            className="rules-image"
            alt="card flip memory game"
            src="https://res.cloudinary.com/dr2zuyd1r/image/upload/v1732858625/animals_1_ve4jwg.png"
          />
        </div>
        <div className="cfm-rules-container">
          <h1 className="rules-heading">Rules</h1>
          <ul>
            <li className="list-content">
              When the game is started, the users should be able to see the list
              of Cards that are shuffled and turned face down.
            </li>
            <li className="list-content">
              When a user starts the game, the user should be able to see the
              Timer running.
            </li>
            <li className="list-content">The Timer starts from 2 Minutes.</li>
            <li className="list-content">
              If the two cards have the same image, they remain face up. If not,
              they should be flipped face down again after a short 2 seconds.
            </li>
            <li className="list-content">
              Users should be able to compare only two cards at a time.
            </li>
            <li className="list-content">
              When the user is not able to find all the cards before the timer
              ends then the game should end and redirect to the Time Up Page.
            </li>
            <li className="list-content">
              If the user finds all the matching cards before the timer ends,
              then the user should be redirected to the results page.
            </li>
          </ul>
          <button
            type="button"
            onClick={onClickButton}
            className="cfm-start-button"
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )
}
export default RulesView
