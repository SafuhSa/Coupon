

export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);


// export const deleteBoughtItem = (id) => (
//   $.ajax({
//     method: 'DELETE',
//     url: `api/boughtitems/${id}`
//   })
// );