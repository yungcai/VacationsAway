import React from 'react';
import SplashContainer from '../splash/splash_container';


const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="navbar-greeting">
      <button onClick={() => openModal('login')} className="login-btn">LOG IN</button>
      <button onClick={() => openModal('signup')} className="signup-btn">SIGN UP</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;