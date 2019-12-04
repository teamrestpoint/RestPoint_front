import React from 'react'
import ReviewScroll from '../components/ReviewScroll'

const DetailsPage = () => {
    return (
        <div>
            <h1>DetailsPage!</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6 justify-content-center my-5">
                        <ReviewScroll />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage
