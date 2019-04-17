import React, { Component } from 'react';
import './App.css';
import {NavLink, Switch, Route } from 'react-router-dom';

import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';

class App extends Component {

  render() {
    return (
      <div className="app">
            <div className="header">
              <div className="links-div">
                <NavLink exact to="/" activeStyle={{color:"#1f0c70"}} className="link" >Main</NavLink>
                <NavLink exact to="/aboutme" activeStyle={{color:"#1f0c70"}} className="link">About</NavLink>
              </div>  
            </div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/aboutme" component={AboutMe} />
          </Switch> 
      </div>
    );
  }
}

export default App;
