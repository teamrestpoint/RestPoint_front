import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router'

const ReviewPage = (_props) => {
  const [redirect, setRedirect] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    setRedirect(true)
  }

  return (
    <>
      <h2>Give a rating for {/* Fill in props for site name here */}</h2>
      <Form onSubmit={(event) => handleSubmit()}>

        {/* This spot is for the 4 star Rating Component */}

        <fieldset class="star-rating">
          <legend class="star-rating__title">Your rating:</legend>
          <div class="star-rating__stars">
            <input class="star-rating__input" type="radio" name="rating" value="1" id="rating-1" />
            <label class="star-rating__label" for="rating-1" aria-label="One"></label>
            <input class="star-rating__input" type="radio" name="rating" value="2" id="rating-2" />
            <label class="star-rating__label" for="rating-2" aria-label="Two"></label>
            <input class="star-rating__input" type="radio" name="rating" value="3" id="rating-3" />
            <label class="star-rating__label" for="rating-3" aria-label="Three"></label>
            <input class="star-rating__input" type="radio" name="rating" value="4" id="rating-4" />
            <label class="star-rating__label" for="rating-4" aria-label="Four"></label>
          </div>
        </fieldset>


        <Form.Group controlId="review">
          <Form.Label>Review</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group controlId="is_accurate">
          <Form.Check type="checkbox" label="Is Accurate?" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
          </Button>
      </Form>
    </>
  )

}

export default ReviewPage