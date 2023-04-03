import React from 'react';
import Stars from './stars';
import ReviewForm from './reviewForm';
import ReviewList from './reviewList';


//functionality and layout of each movie card component. state props for reviews and rating to update on each.
export default class Movie extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            reviews: props.reviews,
            rating: props.rating
        };
    }
    
//handles the clicks for the star rating. updates the rating state
    starClicker = (selectedStars) => {
        this.props.onStarClick(selectedStars);
    }
//handles review submission. Updates the reviews state
    reviewSubmit = (review) => {
        const newReview = {reviews: this.state.reviews, rating: this.state.rating}
        this.setState(prevState => ({
            reviews: [...prevState.reviews, review]
        }));
    }

//rendering for each movie card. Starts with a variable for each one's default review. 
//Below that is div structure for each movie. includes image, title, and synopsis props. 
//Below that is the interactable stuff, stars component, review form, and the review list that populates with submitted reviews
    render () {
        const defaultReview = this.state.reviews.length > 0 ? this.state.reviews : {name: '', review: ''};

        return (
            <div className="col-sm-4">
                <div className='card'>
                    <img src={this.props.cover} className='card-img' alt={this.props.title} />

                    <div className="card-body" id="cardBod">
                        <h4 className="card-title">
                            {this.props.title}
                        </h4>
                        <p className="card-text">
                            {this.props.synopsis}
                        </p>
                        <h3 className="text-rating">
                           Rating: <Stars rating={this.props.rating} /> 
                        </h3>
                    </div>
                    <div className="card-footer" id="cardBod">
                        <ReviewForm onSubmit={this.reviewSubmit} />
                    </div>
                    <div className="card-footer" id="cardBod">
                        <ReviewList reviews={defaultReview} />
                    </div>
                </div>
            </div>
        );
    }
}