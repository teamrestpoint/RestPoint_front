import React from 'react'

const Map = ({userLocation}) => {
  return (
  <>Map
  {userLocation && <><h1>{userLocation.latitude}, {userLocation.longitude}</h1></>}
  </>
  )
}

export default Map