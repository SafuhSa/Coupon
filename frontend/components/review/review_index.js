import React from 'react';
import UpdateContainer from "./review_update_container";
import { deepEqual } from 'assert';
class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {reviews: this.props.reviews}
    this.updateForm = []
  }
  componentDidUpdate(prevProps) {
    if (prevProps.review != this.props.review) {
      this.setState({ reviews: this.props.reviews });
    }
  }

  updateReview(review){
    // return () => {
      let reviews = this.state.reviews.slice()
      let updateForm = <UpdateContainer review={review}/>
      for(let i = 0; i < reviews.length; i++) {
        const el = reviews[i];
        if (el.id === review.id) {
          reviews.splice(i, 1, updateForm);
        }
      }
      this.setState({ reviews: reviews })
  }


reviews() {
  // if (this.state.reviews !== this.props.reviews ) return this.setState({ reviews: this.props.reviews })
  let { userId } = this.props; 
if (this.state.reviews[0]) {
  return this.state.reviews.map((el, i) => {
    if ((el.userId === undefined)) return <div key={i}>{el}</div>
    let result;
    if (el.userId === userId) {
      result = (
      <div>
          <button onClick={() => this.props.deleteReview(el.id)} >Delete this review</button>
          <button onClick={() => this.updateReview.bind(this)(el)} >Change this review</button>
      </div>
      )
    }
    return(
      <div key={i}>
        {result}
        {el.body}
      </div>
    )
  })
  return null;
  }

return 'be the first to review';
}
  render() {
    return (
      <div>
        {this.reviews.bind(this)()}
      </div>
    )
  }
}

export default ReviewIndex;