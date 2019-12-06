import React, { useState, useEffect } from 'react'
import Map from '../components/Map'
import '../App.css'

import mapAPI from '../api/mapAPI'

const LandingPage = ({ userLocation }) => {
  const [restrooms, setRestrooms] = useState(null)

  const getRestrooms = async () => {
    let locations = await mapAPI.getLocations()
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
    <>
      <Map userLocation={userLocation} restrooms={restrooms} />
    </>
  )
}

export default LandingPage
