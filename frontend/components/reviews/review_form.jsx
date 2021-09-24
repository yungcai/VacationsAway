import React from 'react'

class ReviewForm extends React.Component{

    constructor(props){
        super(props)
        this.state = props.review
        this.state.stay_id = props.stay.id
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateRating = this.updateRating.bind(this);
    }

    handleSubmit(e){
     
        e.preventDefault();
        this.props.action(this.state);

    }

    handleChange(event) {
        this.setState({description: event.target.value});
    }

    updateRating(event) {
        this.setState({star_rating: parseInt(event.target.value)});
    }


    render(){

        return (
            <div className='review-form-container'>
                <form onSubmit={this.handleSubmit}>
                    <label className='rating'>RATE YOUR STAY
                        <input className='rating-input' type='number' min='1' max='5' onChange={this.updateRating} />
                    </label>
                    <br/>
                    <label className='review'>
                        <textarea className='textarea' id='review-input' rows='15' cols='30' placeholder='Write a review...'  onChange={this.handleChange}  />
                    </label>
                    <br/>
                    <input className='submit-btn' type='submit' value='WRITE A REVIEW'/>
                </form>
            </div>
        );
    }
}

export default ReviewForm

