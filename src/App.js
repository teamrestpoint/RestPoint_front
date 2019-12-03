import React, { useState, useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css'

import LandingPage from './pages/LandingPage'


function App() {
  const [userLocation, setUserLocation] = useState(null)

  const fetchUserLocation = async () => {
    let loc = await navigator.geolocation
    await loc.getCurrentPosition((position) => {
      setUserLocation(position.coords)
    })
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
