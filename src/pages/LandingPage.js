import React, {useState, useEffect}from 'react'
import Map from '../components/Map'
import '../App.css'

import mapAPI from '../api/mapAPI'

const LandingPage = ({userLocation}) => {
  const [restrooms, setRestrooms] = useState(null)
  
  const getRestrooms = async () => {
    let locations = await mapAPI.getLocations()
    console.log(locations)
    setRestrooms(locations)
  }

  useEffect(
    () => {
      if (!restrooms) {
        getRestrooms()
      }
    }
  )

  return (
    <><h1>RestPoint - Landing Page</h1>
    <Map userLocation={userLocation} restrooms={restrooms} />
    </>
  )
} 


export default LandingPage