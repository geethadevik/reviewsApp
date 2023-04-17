import {Component} from 'react'

import './index.css'

const Buttons = {
  leftArrow: 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png',
  rightArrow: 'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png',
}

class ReviewsCarousel extends Component {
  state = {reviewId: 0}

  onClickLeftButton = () => {
    const {reviewId} = this.state
    if (reviewId <= 0) {
      this.setState({reviewId: 0})
    } else {
      this.setState(prevState => ({reviewId: prevState.reviewId - 1}))
    }
  }

  onClickRightButton = () => {
    const {reviewId} = this.state
    if (reviewId >= 3) {
      this.setState({reviewId: 3})
    } else {
      this.setState(prevState => ({reviewId: prevState.reviewId + 1}))
    }
  }

  render() {
    const {reviewId} = this.state
    const {reviewsList} = this.props
    const getReviewItem = reviewsList[reviewId]
    const {imgUrl, username, companyName, description} = getReviewItem

    return (
      <div className="appContainer">
        <div className="reviewsContainer">
          <h1 className="heading">Reviews</h1>
          <div className="reviewBodyContainer">
            <button
              onClick={this.onClickLeftButton}
               data-testid="lefttArrow"
              className="arrowButtons"
              type="button"
            >
              <img alt="left arrow" src={Buttons.leftArrow} />
            </button>
            <div className="profileContainer">
              <img alt={username} src={imgUrl} />
              <p className="name">{username}</p>
              <p className="companyName">{companyName}</p>
              <p className="reviewExplanation">{description}</p>
            </div>
            <button
              onClick={this.onClickRightButton}
               data-testid="rightArrow"
              className="arrowButtons"
              type="button"
            >
              <img alt="right arrow" src={Buttons.rightArrow} />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
