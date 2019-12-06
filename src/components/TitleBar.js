import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logoassvg.svg'

const TitleBar = () => {
    return (
        <div>
            <nav className="svgLogo">
                <h1 key={'home'}><Link to='/'><img src={logo} alt="logo" height="150px" /></Link></h1>
            </nav>
        </div>
    )
}

export default TitleBar
