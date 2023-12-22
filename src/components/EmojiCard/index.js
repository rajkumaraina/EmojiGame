import './index.css'

const EachEmojiCard = props => {
  const {item, emojiClicked} = props
  const {id, emojiName, emojiUrl} = item
  const imageClicked = () => {
    emojiClicked(id)
  }
  return (
    <li className="eachEmojiContainer">
      <img
        src={emojiUrl}
        alt={emojiName}
        className="emojiImg"
        onClick={imageClicked}
      />
    </li>
  )
}

export default EachEmojiCard
