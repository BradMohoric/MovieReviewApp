import React from 'react';


//review component. Also uses the name and review props. Each one organized in its own card footer.
export default class Review extends React.Component {
    render() {
        const {name, review} = this.props;

        return (
            <div className='card-footer'>
                <h4 className="text-center">Name: {name}</h4>
                <p id="reviewBox" className="text-center">Review: {review}</p>
            </div>
        );
    }
}