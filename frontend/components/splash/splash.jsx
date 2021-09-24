import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { logout } from '../../util/session_api_util'
import GreetingContainer from '../navbar/greeting_container'

const Splash = props => (
    <div>
   
         <div className='splash1'>
             <div><Link to={`/stays`} className='center-btn'>FIND YOUR STAY AWAY</Link></div>
         </div> 
 
         <div className='splash2'>
         <Link className='splash-header' to={`/stays`}>GETAWAYS</Link>
         <Link className='explore-link' to={`/stays`}>EXPLORE OUR OPTIONS</Link> 
         </div>
 
         <footer className='footer'>
                <div className='list-1'>
                 <p className='footer-li' style ={{fontWeight: 'bold'}}><a href='https://www.linkedin.com/in/yung-cai-8b8744218/' target='_blank'><span className="iconify" data-icon="akar-icons:linkedin-fill" ></span></a></p>
                 <p className='footer-li' >SKILLS AND TECHNOLOGIES</p>
                 <p className='footer-li'>-Ruby on Rails</p>
                 <p className='footer-li'>-React/Redux</p>
                 <p className='footer-li'>-MongoDB</p>
                 <p className='footer-li'>-Node.js</p>
                 <p className='footer-li'>-PostgreSQL</p>
                 <p className='footer-li'>-JQuery</p>
                </div>

                <div className='list-2'>
                <p className='footer-li' style ={{fontWeight: 'bold'}}><a href='https://github.com/yungcai' target='_blank'><span className="iconify" data-icon="akar-icons:github-fill"  ></span></a></p>
                 <p className='footer-li'>SKILLS AND TECHNOLOGIES</p>
                 <p className='footer-li'>-SQL</p>
                 <p className='footer-li'>-SQLite3</p>
                 <p className='footer-li'>-Webpack</p>
                 <p className='footer-li'>-Git</p>
                 <p className='footer-li'>-Heroku</p>
                 <p className='footer-li'>-JQueryLite</p>
                </div>

                <div className='list-3'>
                <p className='footer-li' style ={{color: 'black'}}><a href='https://angel.co/u/yung-cai' target='_blank'><span className="iconify" data-icon="cib:angellist"></span></a></p>
                 <p className='footer-li'>SKILLS AND TECHNOLOGIES</p>
                 <p className='footer-li'>-Babel</p>
                 <p className='footer-li'>-Google Maps API</p>
                 <p className='footer-li'>-Amazon Web Services</p>
                 <p className='footer-li'>HTML Canvas</p>
                 <p className='footer-li'> HTML/CSS</p>
                 <p className='footer-li'>-Express</p>
                </div>

                
         </footer>
    </div>
 )
 
 export default Splash

 