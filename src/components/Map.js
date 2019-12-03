import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import CityPin from './CityPin'

const Map = ({ userLocation }) => {
  const [didUpdate, setDidUpdate] = useState(false)

  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "50vh",
    zoom: 15,
    latitude: 41.883,
    longitude: -87.626,
  })

  useEffect(
    () => {
      if (userLocation && !didUpdate) {
        setViewport({
          width: "50vw",
          height: "50vh",
          zoom: 15,
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
        })
        setDidUpdate(true)
        console.log('updated')
      }
      console.log(userLocation)
    }
  )

  return (
    <>
          <div class="userlocation">
          <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibWFydW1hcnVtYXJ1IiwiYSI6ImNrMzRub25mbDA5eWkzanJ6MXp4dHF4NDEifQ.UXXViE_mVUSwBI9zDfJ8fQ"
        mapStyle="mapbox://styles/marumarumaru/ck34ppm5u4wtq1cmmnowi394f"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        {userLocation && <Marker
          key={1}
          latitude={parseFloat(userLocation.latitude)}
          longitude={parseFloat(userLocation.longitude)}
        >
          <div
            className='marker-div'
          >
            <CityPin />
          </div>
        </Marker>}

      </ReactMapGL>
      </div>
    </>
  )
}

export default Map