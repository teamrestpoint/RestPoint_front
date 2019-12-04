import React, { useState } from 'react'
import useInfiniteScroll from "./useInfiniteScroll"

const ReviewScroll = () => {
    const [reviewItems, setReviewItems] = useState(Array.from(Array(30).keys(), n => n + 1))
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreReviewItems)

    function fetchMoreReviewItems() {
        setTimeout(() => {
          setReviewItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]))
          setIsFetching(false)
        }, 2000)
      }

    return (
        <>
            <ul className="list-group mb-2">
                {reviewItems.map(reviewItem => <li className="list-group-item" key={reviewItem}>Review Item {reviewItem}</li>)}
            </ul>
            {isFetching && 'Fetching more reviews...'}
        </>
    )
}

export default ReviewScroll