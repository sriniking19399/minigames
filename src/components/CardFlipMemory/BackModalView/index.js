import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const BackModalView = props => {
  const {modalOpen, onClickRules, onClickClose} = props
  const openModal = () => {
    onClickRules()
  }
  const closeModal = () => {
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
          className="trigger-button"
          type="button"
          data-testid="Rules"
          onClick={openModal}
        >
          Rules
        </button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%,-50%)',
            },
          }}
        >
          <button
            data-testid="close"
            className="close-button"
            type="button"
            onClick={closeModal}
          >
            <CgClose size="30" color="#616e7c" aria-label="close" />
          </button>

          <h1 className="popup-heading">Rules</h1>
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
        </Modal>
      </div>
    </div>
  )
}
export default BackModalView
