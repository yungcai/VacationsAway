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
                <div className='list-1'>
                 <p className='footer-li' style ={{fontWeight: 'bold'}}>ABOUT ME</p>
                 <p className='footer-li'>Diversity and Discrimiation</p>
                 <p className='footer-li'>Newsroom</p>
                 <p className='footer-li'>Careers</p>
                 <p className='footer-li'>AirBnbPlus</p>
                 <p className='footer-li'>AirBnb Luxe</p>
                 <p className='footer-li'>HotelTonight</p>
                 <p className='footer-li'>Responsible Hosting</p>
                </div>

                <div className='list-2'>
                 <p className='footer-li' style ={{fontWeight: 'bold'}}>LINKEDIN</p>
                 <p className='footer-li'>Host your home</p>
                 <p className='footer-li'>Trust your safety</p>
                 <p className='footer-li'>Gift Cards</p>
                 <p className='footer-li'>Guest Referrals</p>
                 <p className='footer-li'>Community Center</p>
                 <p className='footer-li'>Neighborhood Support</p>
                 <p className='footer-li'>Cancellation Options</p>
                </div>

                <div className='list-3'>
                 <p className='footer-li' style ={{fontWeight: 'bold'}}>GITHUB</p>
                 <p className='footer-li'>Founder's Letter</p>
                 <p className='footer-li'>Accessibility</p>
                 <p className='footer-li'>HelpCenter</p>
                 <p className='footer-li'>Neighborhood Support</p>
                 <p className='footer-li'>Airbnb Assoiciates</p>
                 <p className='footer-li'>Made possible by hosts</p>
                 <p className='footer-li'>COVID-19 response</p>
                </div>

                
         </footer>
    </div>
 )
 
 export default Splash
