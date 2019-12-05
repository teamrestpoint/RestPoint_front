import React from 'react'
import { Link } from 'react-router-dom'

const TitleBar = () => {
    return (
        <div>
            <nav>
                <h1 key={'home'}><Link to='/'> RestPoint</Link></h1>
            </nav>

        </div>
    )
}

export default TitleBar
