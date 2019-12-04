const getReviews = async () => {
    let response = await fetch('https://restpoint-back.herokuapp.com/restpoint/reviews/')
    let data = await response.json()
    return data
  }

export default {
    getReviews: getReviews
}
