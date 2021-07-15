import React from 'react'

class ReviewForm extends React.Component{

    constructor(props){
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        return (
            <div className='review-form-container'>
                <form onSubmit={this.handleSubmit}>
                    <label className='rating'>RATING
                        <input className='rating-input' type='radio' />
                    </label>
                    <br/>
                    <label className='review'>REVIEW
                        <textarea id='review-input' rows='30' cols='40'/>
                    </label>
                    <br/>
                    <input className='submit-btn' type='submit'/>
                </form>
            </div>
        );
    }
}

export default ReviewForm