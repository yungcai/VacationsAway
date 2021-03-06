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
        
    //    debugger 
        return(
            <div >
               
                {this.props.user_id === this.props.review.user_id? 
                    <div>
                    <button className='delete-review' onClick={this.handleSubmit}><span class="iconify" data-icon="fluent:delete-28-regular"></span></button>
                    </div>
                :
                    null
        }
            </div>
        ) 
    }

}

export default DeleteReview