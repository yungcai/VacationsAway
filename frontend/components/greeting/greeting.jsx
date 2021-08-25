import React from 'react';
import SplashContainer from '../splash/splash_container';
import { Link } from 'react-router-dom';
import ReservationIndexContainer from '../reservations/reservation_index_container';


const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className='greeting-container'>
      <button onClick={() => openModal('login')} className="login-btn">LOG IN</button>
      <button onClick={() => openModal('signup')} className="signup-btn">SIGN UP</button>
    </nav>
  );
  const personalGreeting = () => (
    
    <div className='logged-in-header'>
      <button className="header-button" onClick={logout}>LOG OUT</button>
      <h2 className="header-name">WELCOME {currentUser.username.toUpperCase()}!</h2>
      <p className='your-stays'>YOUR RESERVATIONS</p>
      <ReservationIndexContainer />
    </div>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );

  
};

export default Greeting;