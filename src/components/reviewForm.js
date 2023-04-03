import React from 'react';


//Review form component. state for name and review that tie to each input field.
export default class ReviewForm extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            name: '',
            review: ''
        };
    }
//updates the state for the review field if the if loop, updates the state for the name in the else if. A bit cleaner than 2 seperate functions.
    reviewChange = (event) => {
        if (event.target.name === 'review') {
            this.setState({review: event.target.value});
        }
        else if (event.target.name === 'name')
        this.setState({name: event.target.value}) ;
    }

//handles the submit button. Updates the full review object with review and name states taken from the fields in the function above
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit({review: this.state.review, name: this.state.name});
        this.setState({review: ''});
        this.setState({name: ''});
    }

//renders the form. Regular input for name, text area for review to give more space. Submit button below those.    
    render() {
        const {review} = this.state;
        const {name} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <div className='row'>
                    <input type='text' id='reviewName' name='name' placeholder='Name' value={name} onChange={this.reviewChange} className='col' />
                </div>
                <br></br>
                <div className='row'>
                    <textarea type='text' placeholder='Your thoughts here' value={review} onChange={this.reviewChange} className='col' name='review' />
                </div>
                <br></br>
                <div className='row'>
                    <button type='submit' className='review btn btn-dark'>Submit</button>
                </div>
            </form>
        );
    }
}