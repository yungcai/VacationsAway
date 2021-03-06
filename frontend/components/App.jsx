import React from "react";
import GreetingContainer from "./navbar/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import StaysIndexContainer from "./stays/stays_index_container";
import StayShowContainer from "./stays/stay_show_container";
import SplashContainer from "./splash/splash_container";
import EditFormContainer from "./reviews/edit_form_container";
import ReservationIndexContainer from "./reservations/reservation_index_container";
import NavbarContainer from "./navbar/navbar_container";


const App = () => (
  <div>
    <Modal/>
    <NavbarContainer/>
    <Switch>
        <Route exact path='/stays' component={StaysIndexContainer}/>
        <Route exact path='/stays/:stayId' component={StayShowContainer}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path='/reviews/:reviewId/edit' component={EditFormContainer}/>
        <ProtectedRoute  exact path='/reservations' component={ReservationIndexContainer}/>
        <Route exact path='/' component={SplashContainer}/>
    </Switch>
  
  </div>
);


export default App;

