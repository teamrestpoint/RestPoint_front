import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import UserPin from './UserPin'
import RestroomPin from './RestroomPin'


const Map = ({ userLocation, restrooms }) => {
  const [didUpdate, setDidUpdate] = useState(false)

  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "50vh",
    zoom: 15,
    latitude: 41.883,
    longitude: -87.626,
  })

  const makeToilets = () => {
    let output = restrooms.map((restroom) => 
      <Marker key={restroom.id} latitude={parseFloat(restroom.lat)} longitude={parseFloat(restroom.long)} >
        <RestroomPin />
      </Marker>
    )
    return output

  }
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
      }
    }
  )

  return (
    <>
      <div className="userlocation">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoibWFydW1hcnVtYXJ1IiwiYSI6ImNrMzRub25mbDA5eWkzanJ6MXp4dHF4NDEifQ.UXXViE_mVUSwBI9zDfJ8fQ"
          mapStyle="mapbox://styles/marumarumaru/ck3892e4o219o1cpb52p873w5"
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
              <UserPin />
            </div>
          </Marker>}
          {restrooms && makeToilets()}

        </ReactMapGL>
      </div>
    </>
  )
}

export default Map