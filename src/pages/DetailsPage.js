import React from 'react'
import Reviews from '../components/Reviews'

export default function DetailsPage(props) {
    const restroom = props.location.state

    return (
        <div class="main">
            <h1>RestPoint: {restroom.location_name} {restroom.id}</h1>
            <div class="secondary">
                <img src="{image_url}" alt="{restroom.location_name}" height="250" width="250" />
                <div class="details">
                    <p>Location: {restroom.location_name}</p>
                    <p>Address: {restroom.address}</p>
                    <p>Description: {restroom.description}</p>
                </div>
                <div class="attributes">
                    <p>Changing Table: {restroom.has_changing_table}</p>
                    <p>Is accessible: {restroom.is_accessible}</p>
                    <p>Gender Neutral: {restroom.is_gender_neutral}</p>
                    <p>Stall Count: {restroom.number_of_stalls}</p>
                    <p>Family Bathroom: {restroom.is_family_bathroom}</p>
                </div>
                <div>
                    <Reviews restroom={restroom}/>
                </div>
            </div>
        </div>
    )
}
