import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const BackModeView = props => {
  const {modelOpen, onClickRules, onClickClose} = props
  const onClickRulesButton = () => {
    onClickRules()
  }
  const onClickCloseModel = () => {
    onClickClose()
  }
  return (
    <div className="back-button-container">
      <Link to="/" className="back-link">
        <button type="button" className="back-button">
          <div className="back-arrow">
            <BiArrowBack />
          </div>
          Back
        </button>
      </Link>
      <div>
        <button
          type="button"
          data-testid="Rules"
          onClick={onClickRulesButton}
          className="trigger-button"
        >
          Rules
        </button>
        <Modal isOpen={modelOpen} className="popup-container">
          <button
            data-testid="close"
            className="close-button"
            type="button"
            onClick={onClickCloseModel}
          >
            <CgClose size="30" color="#616e7c" aria-label="close" />
          </button>
          <h1 className="popup-heading">Rules</h1>
          <ul>
            <li>User should be able to see the list of Emojis</li>
            <li>
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </li>
            <li>
              This process should be repeated every time the user clicks on an
              emoji card
            </li>
            <li>
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </li>
            <li>
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </li>
            <li>
              Once the game is over, the user will be redirected to the results
              page.
            </li>
          </ul>
        </Modal>
      </div>
    </div>
  )
}
export default BackModeView
