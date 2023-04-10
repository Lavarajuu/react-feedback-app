import {Component} from 'react'
import FeedbackItems from '../FeedbackItems'
import './index.css'

class Feedback extends Component {
  state = {submitFeedback: false}

  clickedEmoji = () => {
    this.setState({submitFeedback: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {submitFeedback} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {submitFeedback ? (
            <div>
              <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
              <h1 className="thank-you">Thank You!</h1>
              <p className="description">
                We will use you feedback to improve our customer support
                performance
              </p>
            </div>
          ) : (
            <div className="feedback-text">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-container">
                {emojis.map(eachFeedback => (
                  <FeedbackItems
                    eachFeedback={eachFeedback}
                    key={eachFeedback.id}
                    clickedEmoji={this.clickedEmoji}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
