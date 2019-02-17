import React from 'react';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
reviews() {
let review = this.props.review
if (review[0]) return review[0].body
return 'be the first to review'
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