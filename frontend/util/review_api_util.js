export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);


export const deleteReview = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  })
);

export const updateReview = (review) => (
  $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: { review }
  })
);
