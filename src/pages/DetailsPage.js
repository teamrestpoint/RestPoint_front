import React from 'react'
import Reviews from '../components/Reviews'

export default function DetailsPage(props) {
    const restroom = props.location.state

    return (
        <div className="main">
            <h1>Your RestPoint: {restroom.location_name}</h1>
            <div className="secondary">
                <img src={restroom.image_url} alt={restroom.location_name} height="250" width="250" />
                <div className="details">
                    <p>Location: {restroom.location_name}</p>
                    <p>Address: {restroom.address}</p>
                    <p>Description: {restroom.description}</p>
                </div>
                <div className="attributes">
                    <p>Changing Table: {restroom.has_changing_table.toString()}</p>
                    <p>Is accessible: {restroom.is_accessible.toString()}</p>
                    <p>Gender Neutral: {restroom.is_gender_neutral.toString()}</p>
                    <p>Stall Count: {restroom.number_of_stalls}</p>
                    <p>Family Bathroom: {restroom.is_family_bathroom.toString()}</p>
                </div>
                <div>
                    <Reviews restroom={restroom}/>
                </div>
            </div>
        </div>
    )
}
