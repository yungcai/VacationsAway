export const fetchReviews = stayId => {
    return $.ajax({
      method: "GET",
      url: `api/stays/${stayId}/reviews`
    });
  };
  
  // export const fetchReview = (id, stayId) => {
  //   return $.ajax({
  //     method: "GET",
  //     url: `api/stays/${stayId}/reviews/${id}`
  //   });
  // };
  
  export const createReview = (review) => {
    return $.ajax({
      method: "POST",
      url: `api/stays/${review.stay_id}/reviews`,
      data: { review }
    });
  };
  
  export const updateReview = (review) => {
    return $.ajax({
      method: "PATCH",
      url: `api/reviews/${review.id}`,
      data: { review }
    });
  };
  
  export const deleteReview = (reviewId) => {
    return $.ajax({
      method: "DELETE",
      url: `api/reviews/${reviewId}`
    });
  };