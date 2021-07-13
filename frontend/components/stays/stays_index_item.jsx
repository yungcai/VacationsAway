import React from 'react';
import stay_show_container from './stay_show_container';
import { Link } from 'react-router-dom';

const StaysIndexItem = props => {
  
    return <div className='index-item'>
        <p></p>
        <Link to={`/stays/${props.stay.id}`}>INDEX ITEM</Link>
        </div>

}

export default StaysIndexItem