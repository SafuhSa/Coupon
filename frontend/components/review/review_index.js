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
        <div className='indxrev-butns'>
          <button className='indxrev-butn' onClick={() => this.props.deleteReview(el.id)} >Delete</button>
          <button className='indxrev-butn' onClick={() => this.updateReview.bind(this)(el)} >Update</button>
      </div>
      )
    }
    let name = el.author.split(' ').map(el => (el[0].toUpperCase() + el.slice(1).toLowerCase())).join(' ')
    return(
      <div key={i} className='posted-review'>

        <div className='review-auth-btns'>
          <h3 className='review-author'>{name}</h3>
        {result}
        </div>

        <ul className='review-stars'> 
              <span className={el.rating >= 1 ? "fa fa-star checked posted-star" : "fa fa-star posted-star"} />
              <span className={el.rating >= 2 ? "fa fa-star checked posted-star" : "fa fa-star posted-star"} />
              <span className={el.rating >= 3 ? "fa fa-star checked posted-star" : "fa fa-star posted-star"} />
              <span className={el.rating >= 4 ? "fa fa-star checked posted-star" : "fa fa-star posted-star"} />
              <span className={el.rating >= 5 ? "fa fa-star checked posted-star" : "fa fa-star posted-star"} />
            </ul>
            <p className='posted-review-body'>{el.body}</p>
      </div>
    )
  })
  }

  // return <p className='frst-to-review'>Be the first to review this listing </p>;
  return null;
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