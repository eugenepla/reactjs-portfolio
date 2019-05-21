import React, { Component } from 'react'
import './App.css'
import {NavLink, Switch, Route } from 'react-router-dom'

import LandingPage from './layouts/landingpage'
import Projects from './layouts/projects'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="links-div">
            <NavLink exact to="/" activeStyle={{color: '#1f0c70'}} className="link" >Main</NavLink>
            <NavLink exact to="/projects" activeStyle={{color: '#1f0c70'}} className="link">projects</NavLink>
          </div>  
        </div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/projects" component={Projects} />
        </Switch> 
      </div>
    )
  }
}

export default App
