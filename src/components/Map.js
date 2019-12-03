import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import CityPin from './CityPin'

const Map = ({ userLocation }) => {
  if (!userLocation) {
    userLocation = { latitude: 41.883133, longitude: -87.626686 }
  }
  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "50vh",
    zoom: 15,
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
  })
  // const [selectedLocation, setSelectedLocation] = useState(null)
  // //when popup opens pressing esc will close
  // useEffect(() => {
  //     const listener = e => {
  //         if (e.key === "Escape") {
  //             setSelectedLocation(null)
  //         }
  //     }
  //     window.addEventListener("keydown", listener)
  //     return () => {
  //         window.removeEventListener("keydown", listener)
  //     }
  // }, [])
  // return (
  //     <div>

  //         {props.locations_visited.map(location => (
  //              <Marker 
  //              key={location.id} 
  //              latitude={parseFloat(location.latitude)} 
  //              longitude={parseFloat(location.longitude)}
  //              >
  //                 <div
  //                  className='marker-div' 
  //                  onClick={e => {
  //                     e.preventDefault()
  //                     setSelectedLocation(location)
  //                 }}
  //             >
  //                     <CityPin />
  //                 </div>
  //             </Marker>
  //         ))}
  //         {selectedLocation ? (
  //             <Popup 
  //             latitude={parseFloat(selectedLocation.latitude)} longitude={parseFloat(selectedLocation.longitude)}
  //             onClose={() => {
  //                 setSelectedLocation(null)
  //             }}
  //         >
  //                 <div>
  //                     <h2>{selectedLocation.name}</h2>
  //                     <img src={selectedLocation.pic_url} alt="whoops" height="150" width="200"/>
  //                 </div>
  //             </Popup>
  //         ) : null}
  //         </ReactMapGL>
  //     </div>
  // )
  // }

  return (
    <>Map
          <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibWFydW1hcnVtYXJ1IiwiYSI6ImNrMzRub25mbDA5eWkzanJ6MXp4dHF4NDEifQ.UXXViE_mVUSwBI9zDfJ8fQ"
        mapStyle="mapbox://styles/marumarumaru/ck34ppm5u4wtq1cmmnowi394f"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        <Marker
          key={1}
          latitude={parseFloat(userLocation.latitude)}
          longitude={parseFloat(userLocation.longitude)}
        >
          <div
            className='marker-div'
          >
            <CityPin />
          </div>
        </Marker>

      </ReactMapGL>
    </>
  )
}

export default Map