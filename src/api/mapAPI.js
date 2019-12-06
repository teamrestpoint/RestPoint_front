const getLocations = async () => {
  let response = await fetch('https://restpoint-back.herokuapp.com/restpoint/locations/')
  let data = await response.json()
  return data
}

export default {
  getLocations: getLocations
}
