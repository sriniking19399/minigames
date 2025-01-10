import {Line} from 'rc-progress'
import './index.css'

const resultEmojilist = [
  {
    emojiUrl:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733487194/neutral_face_ofeb7p.png',
    alt: 'neutral face',
  },
  {
    emojiUrl:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733487192/grimacing_face_vvjfl7.png',
    alt: 'grimacing face',
  },
  {
    emojiUrl:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733487415/slightly_smiling_face_zj0ffm.png',
    alt: 'slightly smiling face',
  },
  {
    emojiUrl:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733487193/grinning_face_with_big_eyes_cldisf.png',
    alt: 'grinning face with big eyes',
  },
  {
    emojiUrl:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733487193/grinning_face_with_smiling_eyes_lm6xzb.png',
    alt: 'grinning face with smiling eyes',
  },
  {
    emojiUrl:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733487193/beaming_face_with_smiling_eyes_daso2b.png',
    alt: 'beaming face with smiling eyes',
  },
  {
    emojiUrl:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733487193/grinning_face_obifih.png',
    alt: 'grinning face',
  },
  {
    emojiUrl:
      'https://res.cloudinary.com/dr2zuyd1r/image/upload/v1733487194/smiling_face_with_sunglasses_zpfiqd.png',
    alt: 'smiling face with sunglasses',
  },
]
const ResultView = props => {
  const {gameLevel, onClickPlayAgain} = props
  const onClickButton = () => {
    onClickPlayAgain()
  }
  return (
    <div className="memory-result-container ">
      <div className="result-progress-container">
        <div className="result-emoji-container">
          {resultEmojilist.map(eachItem => (
            <img
              key={eachItem.alt}
              className="result-emoji-item"
              alt={eachItem.alt}
              src={eachItem.emojiUrl}
            />
          ))}
        </div>
        <Line
          percent={Math.ceil(((gameLevel - 1) / 15) * 100)}
          strokeWidth={3}
          trailWidth={3}
          strokeColor="#467AFF"
        />
        <div className="result-emoji-container">
          <p>Level 1</p>
          <p>Level 5</p>
          <p>Level 10</p>
          <p>Level 15</p>
        </div>
      </div>
      <h1>Congratulations!</h1>
      <h1>You have reached level {gameLevel - 1}</h1>
      <button
        type="button"
        onClick={onClickButton}
        className="memory-playagain-button"
      >
        Play Again
      </button>
    </div>
  )
}
export default ResultView
