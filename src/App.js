import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation } from 'react-mdl';
import {NavLink, Switch, Route } from 'react-router-dom';

import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';
import Resume from './components/resume';

class App extends Component {
  state = {
    linkColor: 'white'
  }
  
  hoverColorChange() {
    
  }

  render() {
    return (

      <div className="app">
       <Layout fixedHeader>
          <Header hideSpacer className="header" seamed scroll>
              <Navigation className="navigation">
                <NavLink exact to="/" activeClassName="active" activeStyle={{color:"#0B032D"}} className="link" >Main</NavLink>
                <NavLink exact to="/resume" activeStyle={{color:"#0B032D"}} className="link">Resume</NavLink>
                <NavLink exact to="/aboutme" activeStyle={{color:"#0B032D"}} className="link">About</NavLink>
              </Navigation>
          </Header>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </Layout>  
      </div>
    );
  }
}

export default App;
