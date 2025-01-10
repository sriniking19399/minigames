import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const RulesView = props => {
  const {startGame} = props
  const onClickButton = () => {
    startGame()
  }

  return (
    <div className="matrix-bg-container">
      <Link to="/" className="back-link">
        <button type="button" className="back-button">
          <div className="back-arrow">
            <BiArrowBack />
          </div>
          Back
        </button>
      </Link>
      <div className="matrix-content-container">
        <div className="matrix-image-container">
          <h1>Memory Matrix</h1>
          <img
            className="rules-image"
            alt="memory matrix"
            src="https://res.cloudinary.com/dr2zuyd1r/image/upload/v1732858092/rhhvomwzbv0xs4zr155j.jpg"
          />
        </div>
        <div className="matrix-rules-container">
          <h1 className="rules-heading">Rules</h1>
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
          <button
            onClick={onClickButton}
            type="button"
            className="memory-start-button"
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )
}
export default RulesView
