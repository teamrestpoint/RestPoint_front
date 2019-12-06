import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router'
import ReviewAPI from '../api/ReviewAPI'

const ReviewPage = (props) => {
  const restroom = props.location.state
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const rating = e.target.rating.value
    const review_text = e.target.review.value
    const is_accurate = e.target.accurate.checked
    console.log(e.target.accurate.checked)

    const reviewData = {
      location: restroom.id,
      rating: rating,
      review_text: review_text,
      is_accurate: is_accurate,
    }

    console.log(reviewData)

    let response = await ReviewAPI.uploadReview(reviewData)
    if (response) {
      setRedirect(true)
    }

  }

  return (
    <>
    {redirect && <Redirect to={{
        pathname: '/details', 
        state: restroom
      }} />
    }
      <h2>Give a rating for {restroom.location_name}:</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>

        <fieldset className="star-rating">
          <legend className="star-rating__title">Your rating:</legend>
          <div className="star-rating__stars">
            <input className="star-rating__input" type="radio" name="rating" value="1" id="rating-1" />
            <label className="star-rating__label" for="rating-1" aria-label="One"></label>
            <input className="star-rating__input" type="radio" name="rating" value="2" id="rating-2" />
            <label className="star-rating__label" for="rating-2" aria-label="Two"></label>
            <input className="star-rating__input" type="radio" name="rating" value="3" id="rating-3" />
            <label className="star-rating__label" for="rating-3" aria-label="Three"></label>
            <input className="star-rating__input" type="radio" name="rating" value="4" id="rating-4" />
            <label className="star-rating__label" for="rating-4" aria-label="Four"></label>
          </div>
        </fieldset>



        <Form.Group controlId="review">
          <Form.Label>Enter a Review:</Form.Label>
          <p/>
          <Form.Control as="textarea" rows="4" cols="100"/>
        </Form.Group>

        <Form.Group controlId="is_accurate">
          <Form.Check type="checkbox" label="Posted restroom description was accurate*" name="accurate" defaultChecked />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Review
          </Button>
      </Form>
      <p></p>
      <p>* If data is inaccurate, please include this information in your review.</p>
    </>
  )

}

export default ReviewPage
