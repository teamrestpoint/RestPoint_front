import React from 'react'

const LandingPage = ({userLocation}) => {

  

  return (
    <><h1>LandingPage</h1>
    {userLocation && <><h1>{userLocation.latitude}, {userLocation.longitude}</h1></>}
    </>
  )
} 


export default LandingPage