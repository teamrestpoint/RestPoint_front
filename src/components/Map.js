import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import UserPin from './UserPin'
import RestroomPin from './RestroomPin'
import { Link } from 'react-router-dom'


const Map = (props) => {
  const timeout = 15000
  const { userLocation, restrooms } = props
  const [didUpdate, setDidUpdate] = useState(false)

  const [viewport, setViewport] = useState({
    width: "80vw",
    height: "70vh",
    zoom: 13,
    latitude: 41.883,
    longitude: -87.626,
  })

  const makeToilets = () => {
    let output = restrooms.map((restroom, index) =>
      <Marker key={restroom.id} latitude={parseFloat(restroom.lat)} longitude={parseFloat(restroom.long)} >
        <div id={index}>
          <Link to={{
            pathname: '/details',
            state: restrooms[index]
          }}
          >
            <RestroomPin />
          </Link>
        </div>
      </Marker>
    )
    return output
  }

  useEffect(
    () => {
      if (userLocation && !didUpdate) {
        setTimeout(() => {
          setViewport({
            width: "80vw",
            height: "70vh",
            zoom: 15,
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          })
          setDidUpdate(true)
        }, timeout)
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
          {restrooms && makeToilets()}
          {userLocation && <Marker
            key={'user'}
            latitude={parseFloat(userLocation.latitude)}
            longitude={parseFloat(userLocation.longitude)}
          >
            <div
              className='marker-div'
            >
              <UserPin />
            </div>
          </Marker>}

        </ReactMapGL>
      </div>
    </>
  )
}

export default Map
