import React from 'react';
import { Link } from 'react-router-dom'
import GreetingContainer from './greeting_container';

class Navbar extends React.Component {
  render() {
    const { currentUser, logout } = this.props
    return (
        <div className='navbar-container'>
            <div className='logo-left'><Link to={`/`} ><img src={window.logo}/></Link></div>
            <div className='icons'>
                <div><a href='https://www.linkedin.com/in/yung-cai-8b8744218/' target='_blank'><span className="iconify" data-icon="akar-icons:linkedin-fill" ></span></a></div>
                <div><a href='https://angel.co/u/yung-cai' target='_blank'><span className="iconify" data-icon="cib:angellist"></span></a></div>
                <div><a href='https://github.com/yungcai' target='_blank'><span className="iconify" data-icon="akar-icons:github-fill"  ></span></a></div>
            </div>
            <div className='nav-right'>
                 <GreetingContainer/>
            </div>
        </div>
      
    )
  }
}

export default Navbar;

