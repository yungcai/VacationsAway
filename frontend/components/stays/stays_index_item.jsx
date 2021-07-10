import React from 'react';
import stay_show_container from './stay_show_container';
import { Link } from 'react-router-dom';

const StaysIndexItem = props => {
  
    return <div>
        <Link to={`/stays/${props.stay.id}`}>THIS IS A ITEM</Link>
        </div>

}

export default StaysIndexItem