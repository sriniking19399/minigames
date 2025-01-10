import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const BackModalView = props => {
  const {modalOpen, onClickRules, onClickClose} = props
  const onClickRulesButton = () => {
    onClickRules()
  }
  const onClickCloseModal = () => {
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
        <Modal isOpen={modalOpen} className="popup-container">
          <button
            data-testid="close"
            className="close-button"
            type="button"
            onClick={onClickCloseModal}
          >
            <CgClose size="30" color="#616e7c" aria-label="close" />
          </button>
          <h1 className="popup-heading">Rules</h1>
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
        </Modal>
      </div>
    </div>
  )
}
export default BackModalView
