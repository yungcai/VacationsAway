import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'


const Splash = props => (
   <div>
        <h1>VACATIONS AWAY</h1>
        <div className='splash1'>
            <div className='center-btn'><Link to={`/stays`}>FIND YOUR STAY AWAY</Link></div>
        </div> 

        <div className='splash2'>
        <Link className='splash-header' to={`/stays`}>GETAWAYS</Link>
        <Link className='explore-link' to={`/stays`}>EXPLORE OUR OPTIONS</Link> 
        </div>

        <footer className='footer'>
                <p className='footer-li'>about me</p>
                <p className='footer-li'>about me</p>
                <p className='footer-li'>about me</p>
        </footer>
   </div>
)

export default Splash

