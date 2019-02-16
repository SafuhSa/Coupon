

export const createReview = (review) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/re',
    review
  })
);


// export const deleteBoughtItem = (id) => (
//   $.ajax({
//     method: 'DELETE',
//     url: `api/boughtitems/${id}`
//   })
// );