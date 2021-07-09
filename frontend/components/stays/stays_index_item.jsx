import React from 'react';

const StaysIndexItem = props => (

    <div>
        <button onClick={()=> props.deleteStay(props.stay.id)}>Delete</button>
    </div>

)

export default StaysIndexItem