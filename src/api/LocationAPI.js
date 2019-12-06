const getLocationByID = async (id) => {
  let response = await fetch(`https://restpoint-back.herokuapp.com/restpoint/locations/${id}/`)
  let data = await response.json()
  return data
}

export default {
  getLocationByID: getLocationByID,
}
