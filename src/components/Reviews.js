import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import reviewAPI from '../api/ReviewAPI'


const Reviews = ({ restroom }) => {
    const [reviewItems, setReviewItems] = useState(null)

    const getFilteredReviews = async () => {
        if (!reviewItems) {
            let allReviews = await reviewAPI.getReviews()
            let reviews = await allReviews.filter((review) => review.location === restroom.id)
            let sortedReviews = reviews.reverse()
            setReviewItems(sortedReviews)
        }
    }

    useEffect(
        () => {
            if (reviewItems === null) {
                getFilteredReviews()
            }
        }
    )

    return (
        <div>
            <h1>Reviews</h1>
            <Link to={{
                pathname: '/review',
                state: restroom
            }}>
                Add Review
            </Link>
            <div>
                {reviewItems && reviewItems.map(reviewItem => <li className="list-group-item" key={reviewItem.id}>
                    <h2>{reviewItem.rating} Stars</h2>
                    <h4>Posted {reviewItem.created_date}</h4>
                    <h3>{reviewItem.review_text}</h3>
                </li>)}
            </div>
        </div>
    )
}

export default Reviews
