import React, { Component } from 'react';
import './App.css';
import {NavLink, Switch, Route } from 'react-router-dom';

import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';
import Resume from './components/resume';

class App extends Component {

  render() {
    return (
      <div className="app">
            <div className="header">
              <div className="links-div">
                <NavLink exact to="/" activeStyle={{color:"#1f0c70"}} className="link" >Main</NavLink>
                <NavLink exact to="/resume" activeStyle={{color:"#1f0c70"}} className="link">Resume</NavLink>
                <NavLink exact to="/aboutme" activeStyle={{color:"#1f0c70"}} className="link">About</NavLink>
              </div>  
            </div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/resume" component={Resume} />
          </Switch> 
      </div>
    );
  }
}

export default App;
