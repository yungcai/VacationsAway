import React from 'react';
import stay_show_container from './stay_show_container';
import { Link } from 'react-router-dom';

const StaysIndexItem = props => {
  
    return <div className='index-item'>
        
        <Link to={`/stays/${props.stay.id}`}><img className='stays-index-img' src={props.stay.image}/></Link>
       <div className='stay-index-des'>{props.stay.description}</div>
       <div className='stay-index-price'>${parseFloat(props.stay.price).toFixed(2)}/night</div>
    </div>

}

export default StaysIndexItem