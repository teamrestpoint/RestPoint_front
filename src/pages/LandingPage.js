import React from 'react'
import Map from '../components/Map'

const LandingPage = ({userLocation}) => {

  

  return (
    <><h1>RestPoint - Landing Page</h1>
    <Map userLocation={userLocation} />
    </>
  )
} 


export default LandingPage