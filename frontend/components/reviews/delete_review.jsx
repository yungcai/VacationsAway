import React from 'react';

class DeleteReview extends React.Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        
        this.props.deleteReview(this.props.review.id)
    }

    render(){

        return(
            <div>
                <button className='delete-review' onClick={this.handleSubmit}>DELETE</button>
            </div>
        )
    }

}

export default DeleteReview