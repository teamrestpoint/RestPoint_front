import React, { useState, useEffect } from 'react'
import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { BrowserRouter, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import DetailsPage from './pages/DetailsPage'
import ReviewPage from './pages/ReviewPage'
import TitleBar from './components/TitleBar'

function App() {
  const [userLocation, setUserLocation] = useState(null)

  const fetchUserLocation = () => {
    var geo_options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 50000
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position.coords)
      }, () => { console.log('fail') }, geo_options
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
      <link href="https://fonts.googleapis.com/css?family=Song+Myung" rel="stylesheet"></link>
      <BrowserRouter>
        <div>
          <TitleBar />
          <Route exact path="/" render={(props) => <LandingPage {...props} userLocation={userLocation} />} />
          <Route exact path="/details" render={(props) => <DetailsPage {...props} />} />
          <Route exact path="/review" render={(props) => <ReviewPage {...props} />} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
