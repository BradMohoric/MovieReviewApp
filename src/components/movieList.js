import React from 'react';
import Movie from './movie';


//movie list component holding each of the movies. Have populated it with 3 movies in an array. Each movie object has an id, title, rating, synopsis, cover, and 
//an array of reviews. Each array of reviews has a default one put in by me in order to make the reviews.map function work on the reviewList component. Would not map 
//an empty array and therefore would not load the page.
export default class MovieList extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            movies: [
                {
                    id: 1,
                    title: 'The Thing (1982)',
                    rating: [0,0],
                    synopsis: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
                    cover: 'https://i.imgur.com/hdqkoX5.jpeg',
                    reviews: [
                        {
                            name: 'Jeff',
                            review: "I love this movie!"
                        }
                    ]
                },

                {
                    id: 2,
                    title: 'Hellraiser (1987)',
                    rating: [0,0],
                    synopsis: "A woman discovers the newly resurrected, partially formed, body of her brother-in-law. She starts killing for him to revitalize his body so he can escape the demonic beings that are pursuing him after he escaped their sadistic underworld.",
                    cover: 'https://i5.walmartimages.com/asr/9b1fd0fc-2b66-421c-a679-e361efcc3abe_1.a91131373301bbe334fd872369b733f4.jpeg',
                    reviews: [
                        {
                            name: 'Steven',
                            review: 'An absolute classic'
                        }
                    ]
                },

                {
                    id: 3,
                    title: 'Event Horizon (1997)',
                    rating: [0,0],
                    synopsis: "A rescue crew investigates a spaceship that disappeared into a black hole and has now returned...with someone or something new on-board.",
                    cover: 'https://i.redd.it/iip21aahnsz31.png',
                    reviews: [
                        {
                            name: 'Brad',
                            review: 'My favorite by far'
                        }
                    ]
                }
            ]
        }
    }

//function to handle review submission. updates the review array for the specific movie based on the id and updates the state, re renders the movies with new reviews.

    reviewMaker = (movieId, review) => {
        const updateMovies = this.state.movies.map(movie => {
            if (movie.id === movieId) {
                return {
                    ...movie,
                    reviews: [...movie.reviews, review]
                };
            }
            return movie;
        })
        this.setState({movies: updateMovies});
    }

//maps over the movies array above and renders each item as a movie component that is imported here. Props for key, title, cover, synopsis, rating, and reviews.
//return on the bottom just returns a div row holding the movies array
    render () {
        const movies = this.state.movies.map(movie => (
            <Movie
            key={movie.id}
            title={movie.title}
            cover={movie.cover}
            synopsis={movie.synopsis}
            rating={movie.rating}
            reviews={movie.reviews}
            />
        ))
        return <div className='row'>{movies}</div>
    }
}