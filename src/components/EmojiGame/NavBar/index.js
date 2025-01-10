import './index.css'

const NavBar = props => {
  const {currentScore, gameInProgress, topScore} = props

  return (
    <nav className="nav-bar-container">
      <div className="nav-content-container">
        <div className="nav-emoji-container">
          <img
            className="emoji-logo"
            alt="emoji logo"
            src="https://res.cloudinary.com/dr2zuyd1r/image/upload/v1732989231/wink_1_miitof.png"
          />
          <h1>Emoji Game</h1>
        </div>
        {gameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
