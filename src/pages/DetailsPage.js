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
                    <p>{restroom.location_name}</p>
                    <p>{restroom.address}</p>
                    {restroom.avg_rating && <p>Average Rating: {restroom.avg_rating}</p>}
                    {restroom.description && <p>Description: {restroom.description}</p>}
                </div>
                <h1>Amenities</h1>
                <div className="attributes">
                    {restroom.has_changing_table && <p>Changing Table</p>}
                    {restroom.is_accessible && <p>Accessible</p>}
                    {restroom.is_gender_neutral && <p>Gender Neutral</p>}
                    {restroom.is_family_bathroom && <p>Family Bathroom</p>}
                    {restroom.number_of_stalls && <p>Stalls: {restroom.number_of_stalls}</p>}
                </div>
                <div>
                    <Reviews restroom={restroom} />
                </div>
            </div>
        </div>
    )
}
