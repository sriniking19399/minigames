import './index.css'

const resultcontent = {
  won: {
    scoreImage:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733153506/Group_7618_msczza.png',
    emoji:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733153775/Emoji_klghy4.png',
    scoreImageAlt: 'won emoji',
    emojiAlt: 'Smiling face with star eyes',
  },
  drow: {
    scoreImage:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733153894/Group_7618_1_g4hkks.png',
    emoji:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733154168/Emoji_3_ce5k09.png',
    scoreImageAlt: 'draw emoji',
    emojiAlt: 'Face without mouth',
  },
  lose: {
    scoreImage:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733154816/Group_7618_2_nktwdm.png',
    emoji:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733155028/Emoji_1_qodhap.png',
    scoreImageAlt: 'lose emoji',
    emojiAlt: 'Face without mouth',
  },
}

const ResultView = props => {
  const {
    computerChoice,
    userChoice,
    score,
    resultText,
    onClickPlayAgain,
  } = props

  const onClickButton = () => {
    onClickPlayAgain()
  }
  let resultlist
  switch (resultText) {
    case 'YOU WON':
      resultlist = resultcontent.won
      break
    case 'YOU LOSE':
      resultlist = resultcontent.lose
      break
    default:
      resultlist = resultcontent.drow
  }
  return (
    <div className="rps-bg-container">
      <h1 className="result-heading">Rock Paper Scissor</h1>
      <div className="rps-result-score-container">
        <h1>
          Rock <br /> Paper <br /> Scissor
        </h1>
        <img
          className="score-image "
          alt={resultlist.scoreImageAlt}
          src={resultlist.scoreImage}
        />
        <div className="rps-score">
          <p>Score</p>
          <p>{score}</p>
        </div>
      </div>
      <div className="rps-result-content-container">
        <div className="rps-you-container">
          <p>You</p>
          <img
            className="choiceImage"
            alt={userChoice.id}
            src={userChoice.imageUrl}
          />
        </div>
        <div className="rps-retry-container">
          <img
            className="emoji"
            alt={resultlist.emojiAlt}
            src={resultlist.emoji}
          />
          <p>{resultText}</p>
          <button
            type="button"
            className="rpc-play-again-button"
            onClick={onClickButton}
          >
            Play Again
          </button>
        </div>
        <div className="rps-you-container">
          <p>Opponent</p>
          <img
            className="choiceImage"
            alt={computerChoice.id}
            src={computerChoice.imageUrl}
          />
        </div>
      </div>
    </div>
  )
}
export default ResultView
