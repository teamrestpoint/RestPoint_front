import React, { useEffect, useState } from 'react'
import Reviews from '../components/Reviews'
import star from '../chicago_star.svg'
import locationAPI from '../api/LocationAPI'

export default function DetailsPage(props) {
  const initialRestroom = props.location.state
  const [restroom, setRestroom] = useState(initialRestroom)

  const updateRestroom = async () => {
    if (restroom.id) {
      let newRoom = await locationAPI.getLocationByID(restroom.id)
      setRestroom(newRoom)
    }

  }

  useEffect(
    () => {
      updateRestroom()
    }, [restroom]
  )

  return (
    <div className="main">
      {restroom &&
        <>
          <h1>{restroom.location_name}</h1>
          <div className="secondary">
            {restroom.image_url && <img src={restroom.image_url} alt={restroom.location_name} height="250" width="250" />}
            <div className="details">
              <p>{restroom.address}</p>
              {restroom.avg_reviews && <p>Average Rating: {restroom.avg_reviews} <img src={star} alt="star" height="42" width="42" /> </p>}
              {restroom.description && <p>Description: {restroom.description}</p>}
            </div>
            <hr />
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
        </>
      }
    </div>
  )
}
