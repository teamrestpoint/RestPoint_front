import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router'

class ReviewPage extends Component {
  state = {
    redirect: false
  }
  
  handleSubmit(event){
    event.preventDefault()
    const reviewObject = {
   
    }
    
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to = "/" />
    }
    
    return (
      <div className="field">
        <Form onSubmit={this.handleSubmit.bind(this)}>

          {/* This spot is for the 4 star Rating Component */}

          <Form.Group controlId="review">
            <Form.Label>Review</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="is_accurate">
            <Form.Check type="checkbox" label="Is Accurate?" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReviewPage