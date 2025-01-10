import {Link} from 'react-router-dom'
import './index.css'

const Home = () => {
  return (
    <div className="home-bg-container">
      <h1 className="main-heading ">Games</h1>
      <ul className="games-list">
        <li className="emoji-container">
          <Link to="/emoji-game" className="link">
            <img
              className="emoji-image"
              alt="emoji game"
              src="https://res.cloudinary.com/dr2zuyd1r/image/upload/v1732858313/Asset_1_4x_1_wdt1ms.png"
            />
            <p className="emoji-name">Emoji Game</p>
          </Link>
        </li>

        <li className="emoji-container">
          <Link to="/memory-matrix" className="link">
            <p className="emoji-name">Memory Matrix</p>
            <img
              className="emoji-image"
              alt="memory matrix"
              src="https://res.cloudinary.com/dr2zuyd1r/image/upload/v1732858092/rhhvomwzbv0xs4zr155j.jpg"
            />
          </Link>
        </li>

        <li className="emoji-container">
          <Link to="/rock-paper-scissor" className="link">
            <p className="emoji-name">Rock Paper Scissor</p>
            <img
              className="emoji-image"
              alt="rock paper scissor"
              src="https://res.cloudinary.com/dr2zuyd1r/image/upload/v1732858428/RPS_vt9dj1.png"
            />
          </Link>
        </li>

        <li className="emoji-container">
          <Link to="/card-flip-memory-game" className="link">
            <img
              className="card-flip-emoji-image"
              alt="card flip memory game"
              src="https://res.cloudinary.com/dr2zuyd1r/image/upload/v1732858625/animals_1_ve4jwg.png"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Home
