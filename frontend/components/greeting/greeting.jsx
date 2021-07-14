import React from 'react';
import SplashContainer from '../splash/splash_container';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className='greeting-container'>
      <button onClick={() => openModal('login')} className="login-btn">LOG IN</button>
      <button onClick={() => openModal('signup')} className="signup-btn">SIGN UP</button>
    </nav>
  );
  const personalGreeting = () => (
    
    <div className='logged-in-header'>
      <h1><Link to='/' className='head'>VACATIONS AWAY</Link></h1>
      <button className="header-button" onClick={logout}>LOG OUT</button>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <p>YOUR STAYS</p>
    </div>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );

  
};

export default Greeting;