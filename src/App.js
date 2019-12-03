import React, { useState, useEffect }from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css'

import LandingPage from './pages/LandingPage'


function App() {
  const [userLocation, setUserLocation] = useState(null)

  const fetchUserLocation = () => {

    var geo_options = {
      enableHighAccuracy: true, 
      maximumAge        : 30000, 
      timeout           : 50000
    };
    

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position.coords)
      }, () => {console.log('fail')}, geo_options
    )
  }

  useEffect(() => {
    if (!userLocation) {
      fetchUserLocation()
    }
  }
  )

  return (
    <div className="App">
      <LandingPage userLocation={userLocation}/>

    </div>
  );
}

export default App;
