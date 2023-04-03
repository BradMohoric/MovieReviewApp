import React from 'react';
import Review from './review';

//Review list component that goes at the bottom of each movie container. Uses a reviews array and maps it.
//renders each review 
export default class ReviewList extends React.Component {
    render() {
        const { reviews } = this.props;

        return (
            <div className="card review-list">
                <h1 className="text-center"><u>Reviews</u></h1>
                <br></br>
                <div>
                {reviews.map((reviewInfo, index) =>
                <Review 
                    key={index} 
                    name={reviewInfo.name}
                    review={reviewInfo.review} 
                    rating={reviewInfo.rating} 
                    />
                )} 
                </div>
            </div>
        );
    }
}