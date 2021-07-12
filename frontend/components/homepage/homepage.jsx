import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Redirect, Link } from "react-router-dom";
import SplashContainer from "../splash/splash_container";




class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return  ( 
      <div className='homepage'>
        <header>
            <h1>VACATIONS AWAY</h1>
            <div className='homepage-greeting'><GreetingContainer /></div>
        </header>

        <div>
        <div className='homepage-splash'><SplashContainer /></div>
        </div>
      </div> 
    ) 
  }
}

export default Homepage