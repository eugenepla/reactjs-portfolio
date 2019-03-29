import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation } from 'react-mdl';
import Navigate from './components/navigation'
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
       <Layout fixedHeader>
          <Header className="header" seamed scroll>
              <Navigation className="navigation">
                <Link to="/" className="link">Main</Link>
                <Link to="/resume" className="link">Resume</Link>
                <Link to="/aboutme" className="link">About</Link>
              </Navigation>
          </Header>
          <Navigate/>
        </Layout>  
      </div>
    );
  }
}

export default App;
