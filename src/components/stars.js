import { useState } from 'react';

//Star component found from a tutorial. Struggled to get the NPM components to work. Shape id's for stars in the output, and a counter that adds to the count based on 
//how many ratings have been clicked. Cannot be spammed by one person. Default is set to 2. Some styling linked in the app.css to make it look more appealing.
const Star = (props) => {  
    const [rating, setRating] = useState(0);
    const averageRating = Math.floor(props.rating.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / props.rating.length)
    const [hover, setHover] = useState(0);
    const [numberOfRatings, setNumberOfRatings] = useState(props.rating.length)
    
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          
          index += 1;
          return (
            <button
              type="Button"
              id="starButton"
              key={index}
              className={index <= (rating || hover) ? "on" : "off"}
              onClick={() => {
                setRating(index)
                if (rating === 0)
                  setNumberOfRatings(numberOfRatings + 1)
            }}
              onMouseEnter={() => {
                setHover(index)
              }}
              onMouseLeave={() => setHover(0)}
            >
              {((index <= averageRating) || (index <= rating)) ? <span className="star">&#9733;</span> : <span className="star">&#9734;</span> }
            </button>
          );
        })}
        <span>{numberOfRatings}</span>
      </div>
    );
  };
  
  export default Star;