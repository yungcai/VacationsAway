import React from 'react';
import { withRouter } from 'react-router';


class EditForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            id: props.review.id,
            description: props.review.description,
            star_rating: props.review.star_rating
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.updateRating = this.updateRating.bind(this)
    }

    componentDidMount(){
        this.props
    }

    handleSubmit(e){
     
        e.preventDefault();
        this.props.action(this.state);
        this.props.history.push('/stays/1')

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
                        <input className='rating-input' type='number' min='1' max='5' onChange={this.updateRating} value={this.state.star_rating} />
                    </label>
                    <br/>
                    <label className='review'>
                        <textarea id='review-input' rows='20' cols='50'   onChange={this.handleChange} value={this.state.description} />
                    </label>
                    <br/>
                    <input className='submit-btn' type='submit' value='EDIT REVIEW'/>
                </form>
            </div>
        );

        }

}

export default withRouter(EditForm)