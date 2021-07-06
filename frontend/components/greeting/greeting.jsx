import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({currentUser, logout}) => (
    currentUser ?  <div>
        <h3>Hi, {currentUser.username}</h3>
        <button onClick={logout}>LOGOUT</button>
    </div> : <nav>
        <Link to='/login'>LOG IN</Link><br/>
        <Link to='/signup'>SIGNUP</Link>
    </nav>

)

export default Greeting;