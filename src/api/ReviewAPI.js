const getReviews = async () => {
  let response = await fetch('https://restpoint-back.herokuapp.com/restpoint/reviews/')
  let data = await response.json()
  return data
}

const uploadReview = async (reviewData) => {
  let response = await fetch('https://restpoint-back.herokuapp.com/restpoint/reviews/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(reviewData)
  })
  let data = await response.json()
  return data
} 

export default {
  getReviews: getReviews,
  uploadReview: uploadReview,
}