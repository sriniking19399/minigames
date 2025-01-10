import './index.css'

const CardListItem = props => {
  const {card, indexValue, onHandler} = props
  const {isMatched, id, isflipped, name, image} = card
  const cardClassName = isMatched || isflipped ? 'active' : ''

  const onClickButton = () => {
    onHandler(indexValue, id)
  }

  return (
    <li className="card">
      <button
        onClick={onClickButton}
        data-testid={name}
        type="button"
        className={`card ${cardClassName}`}
      >
        <img className="img" alt={name} src={image} />
      </button>
    </li>
  )
}
export default CardListItem
