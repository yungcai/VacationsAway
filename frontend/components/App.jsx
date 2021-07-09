import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route } from "react-router";
import { AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";
import StaysIndexContainer from "./stays/stays_index_container";

const App = () => (
  <div>
    <Modal/>
    <header>
      <h1>VACATIONS AWAY</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path='/stays' component={StaysIndexContainer}/>
  </div>
);

// CHANGED APP to app

export default App;