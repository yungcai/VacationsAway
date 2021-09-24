import React from 'react';
import { Link } from 'react-router-dom';

class EditReview extends React.Component{

    constructor(props){
        super(props)
    }



    render(){
        
    //    debugger 
        return(
            <div >
               
                {this.props.user_id === this.props.review.user_id? 
                    <div>
                   <button className='edit-link'><Link className='edit-link2'  to={`/reviews/${this.props.review.id}/edit`}><span class="iconify" data-icon="jam:write"></span></Link></button>
                    </div>
                :
                    null
        }
            </div>
        ) 
    }

}

export default EditReview