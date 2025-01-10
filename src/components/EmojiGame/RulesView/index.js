import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const RulesView = props => {
  const {gameStart} = props
  const onclickbutton = () => {
    gameStart()
  }
  return (
    <div className="emoji-rules-bg-container">
      <Link to="/" className="back-link">
        <button type="button" className="back-button">
          <div className="back-arrow">
            <BiArrowBack />
          </div>
          Back
        </button>
      </Link>
      <div className="rules-content-container">
        <div className="rules-image-container">
          <img
            className="rules-image"
            alt="emoji game"
            src="https://res.cloudinary.com/dr2zuyd1r/image/upload/v1732858313/Asset_1_4x_1_wdt1ms.png"
          />
          <h1 className="rules-heading">Emoji Game</h1>
        </div>
        <div className="rules-container">
          <h1 className="rules-heading">Rules</h1>
          <ul>
            <li className="list-content">
              User should be able to see the list of Emojis
            </li>
            <li className="list-content">
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </li>
            <li className="list-content">
              This process should be repeated every time the user clicks on an
              emoji card
            </li>
            <li className="list-content">
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </li>
            <li className="list-content">
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </li>
            <li className="list-content">
              Once the game is over, the user will be redirected to the results
              page.
            </li>
          </ul>
          <button
            type="button"
            onClick={onclickbutton}
            className="start-button"
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )
}
export default RulesView
