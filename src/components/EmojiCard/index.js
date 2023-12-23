import './index.css'

const EachEmojiCard = props => {
  const {item, emojiClicked} = props
  const {id, emojiName, emojiUrl} = item
  const imageClicked = () => {
    emojiClicked(id)
  }
  return (
    <li className="eachEmojiContainer">
      <button className="ButtonEmoji" type="button" onClick={imageClicked}>
        <img src={emojiUrl} alt={emojiName} className="emojiImg" />
      </button>
    </li>
  )
}

export default EachEmojiCard
