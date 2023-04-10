import './index.css'

const FeedbackItems = props => {
  const {eachFeedback, clickedEmoji} = props
  const {imageUrl, name} = eachFeedback

  const onClickEmoji = () => {
    clickedEmoji()
  }

  return (
    <li>
      <img src={imageUrl} alt={name} className="emoji" onClick={onClickEmoji} />
      <p className="emoji-name">{name}</p>
    </li>
  )
}
export default FeedbackItems
