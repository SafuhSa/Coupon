import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { mouseHvr: 0, rating: 0, body: '' }
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
    debugger
    this.props.createReview(obj).then((result) => {
      this.setState({ mouseHvr: 0, rating: 0, body: '' })
    })
  }

  startLeave(e) {
      e.preventDefault();
      this.setState((state, props) => ({ mouseHvr: state.rating }) )
  }
  
  render() {
    return (
      <div>
        <form className='review-container' >
          <div className='review-body'>
            <ul className='review-stars'> 
              <span id='star1' onMouseEnter={this.starEnter(1).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(1)} className={this.state.mouseHvr >= 1 ? "fa fa-star checked" : "fa fa-star"} />
              <span id='star2' onMouseEnter={this.starEnter(2).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(2)} className={this.state.mouseHvr >= 2 ? "fa fa-star checked" : "fa fa-star"} />
              <span id='star3' onMouseEnter={this.starEnter(3).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(3)} className={this.state.mouseHvr >= 3 ? "fa fa-star checked" : "fa fa-star"} />
              <span id='star4' onMouseEnter={this.starEnter(4).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(4)} className={this.state.mouseHvr >= 4 ? "fa fa-star checked" : "fa fa-star"} />
              <span id='star5' onMouseEnter={this.starEnter(5).bind(this)} onMouseLeave={this.startLeave.bind(this)} onClick={this.updateRating(5)} className={this.state.mouseHvr >= 5 ? "fa fa-star checked" : "fa fa-star"} />
            </ul>
            <textarea onChange={this.updateBody.bind(this)} value={this.state.body} placeholder="Write a review........" className="review-input" />
          </div>
            
          <button onClick={this.handleSubmit.bind(this)}> post review </button>
        </form>
        {this.props.errors}
      </div>
    )
  }
}

export default ReviewForm;