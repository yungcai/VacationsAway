import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { logout } from '../../util/session_api_util'
import GreetingContainer from '../greeting/greeting_container'

const Splash = props => (
    <div>
        <div className='logo-left'><img src={window.logo}/></div>
         {/* <h1><Link to='/' className='head'>VACATIONS AWAY</Link></h1> */}
         <div className='splash1'>
             <div><Link to={`/stays`} className='center-btn'>FIND YOUR STAY AWAY</Link></div>
         </div> 
 
         <div className='splash2'>
         <Link className='splash-header' to={`/stays`}>GETAWAYS</Link>
         <Link className='explore-link' to={`/stays`}>EXPLORE OUR OPTIONS</Link> 
         </div>
 
         <footer className='footer'>
                 <p className='footer-li'>ABOUT ME</p>
                 <p className='footer-li'>GITHUB</p>
                 <p className='footer-li'>LINKEDIN</p>
         </footer>
    </div>
 )
 
 export default Splash
