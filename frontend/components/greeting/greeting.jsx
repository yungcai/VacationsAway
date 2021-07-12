import React from 'react';
import SplashContainer from '../splash/splash_container';


const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className='greeting-container'>
      <button onClick={() => openModal('login')} className="login-btn">LOG IN</button>
      <button onClick={() => openModal('signup')} className="signup-btn">SIGN UP</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className='logged-in-header'>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <p>RESERVATIONS INDEX GOES HERE</p>
      <p>BACK TO INDEX LINK</p>
      <button className="header-button" onClick={logout}>LOG OUT</button>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );

  
};

export default Greeting;