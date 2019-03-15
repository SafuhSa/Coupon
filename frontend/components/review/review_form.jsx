import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { mouseHvr: 0, rating: 0, body: '' }
  }

  componentDidMount(prevProps) {
    if (this.props.review) {
      const {rating, body } =  this.props.review
      this.setState({ rating: rating, body: body, mouseHvr: rating });
    }
  }

  starEnter(num) {
    return (e) => {
      e.preventDefault();
      this.setState({ mouseHvr: num })

    }
  }
  updateRating(rating) {
    return (e) => {
      e.preventDefault()
      this.setState({ rating: rating })
    }
  }
  updateBody(e) {
    this.setState({ body: e.target.value})
  }

  handleSubmit() {
    let obj = { rating: this.state.rating, body: this.state.body, productId: this.props.productId, userId: this.props.currentUser.id}
    if (this.props.formType === 'update review') {
      this.props.action(obj)
    } else {
      this.props.action(obj).then(() => {
        this.setState({ mouseHvr: 0, rating: 0, body: '' })
      })
    }
  }
  renderErrs () {
    let result = []
    this.props.errors.forEach((el, i) => {
      result.push(<li  key={i} className='review-err'>{el}</li>)
    });
    return result
  }

  startLeave(e) {
      e.preventDefault();
      this.setState((state, props) => ({ mouseHvr: state.rating }) )
  }
  
  render() {
    return (
      <div>
        <form className='review-container' >
            <ul className='review-stars'> 
              <span id='star1' onMouseEnter={this.starEnter(1).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(1)} className={this.state.mouseHvr >= 1 ? "fa fa-star checked write-review" : "fa fa-star write-review"} />
              <span id='star2' onMouseEnter={this.starEnter(2).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(2)} className={this.state.mouseHvr >= 2 ? "fa fa-star checked write-review" : "fa fa-star write-review"} />
              <span id='star3' onMouseEnter={this.starEnter(3).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(3)} className={this.state.mouseHvr >= 3 ? "fa fa-star checked write-review" : "fa fa-star write-review"} />
              <span id='star4' onMouseEnter={this.starEnter(4).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(4)} className={this.state.mouseHvr >= 4 ? "fa fa-star checked write-review" : "fa fa-star write-review"} />
              <span id='star5' onMouseEnter={this.starEnter(5).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(5)} className={this.state.mouseHvr >= 5 ? "fa fa-star checked write-review" : "fa fa-star write-review"} />
            </ul>
          <div className='review-body'>
            <h3 className='write-reve-title'>Write a review!!</h3>
            <ul className='review-errs'>{this.renderErrs.bind(this)()}</ul>
            <textarea onChange={this.updateBody.bind(this)} value={this.state.body} placeholder="Write a review........" className="review-input" />
          </div>
          <button className='post-review' onClick={this.handleSubmit.bind(this)}>{this.props.formType}</button>
            
        </form>
      </div>
    )
  }
}

export default ReviewForm;