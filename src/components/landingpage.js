import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Jump from 'react-reveal/Jump';
import Animation from './animation';
import Footer from './footer';

class Landing extends Component {
  constructor(props) {
    super(props);
      
  }

  render() {
    return(
        <Grid className="landing-grid">
          <Cell col={12}>
            <Animation className='animation'/>
           
            <div className="social-links">

              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <Jump when={true}>
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </Jump>
              </a>

              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <Jump when={true}>
                <i className="fa fa-github-square" aria-hidden="true" />
              </Jump>
              </a>

              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <Jump when={true}>
                <i className="fa fa-free-code-camp" aria-hidden="true" />
              </Jump>
              </a>
          </div>
          </Cell>
        </Grid>
    )
  }
}

export default Landing;
