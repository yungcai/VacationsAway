import React from 'react';
import { Link } from 'react-router-dom'
import GreetingContainer from './greeting_container';

class Navbar extends React.Component {
  render() {
    const { currentUser, logout } = this.props
    return (
        <div className='navbar-container'>
            <div className='logo-left'><img src={window.logo}/></div>
            <div className='nav-right'><GreetingContainer/></div>
        </div>
      
    )
  }
}

export default Navbar;