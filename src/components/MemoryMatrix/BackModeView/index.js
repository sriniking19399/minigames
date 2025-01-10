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
            <li className="list-content">
              In each level of the Game, Users should be able to see the Grid
              with (N X N) size starting from 3 and the grid will highlight N
              cells in Blue, the N highlighted cells will be picked randomly.
            </li>
            <li className="list-content">
              The highlighted cells will remain N seconds for the user to
              memorize the cells. At this point, the user should not be able to
              perform any action.
            </li>
            <li className="list-content">
              After N seconds, the grid will clear the N highlighted cells.
            </li>
            <li className="list-content">
              At N seconds, the user can click on any cell. Clicking on a cell
              that was highlighted before it will turn blue. Clicking on the
              other cells that were not highlighted before then will turn to
              red.
            </li>
            <li className="list-content">
              The user should be promoted to the next level if they guess all N
              cells correctly in one attempt.
            </li>
            <li className="list-content">
              The user should be taken to the results page if the user clicks on
              the wrong cell.
            </li>
            <li className="list-content">
              If the user completed all the levels, then the user should be
              taken to the results page.
            </li>
          </ul>
        </Modal>
      </div>
    </div>
  )
}
export default BackModeView
