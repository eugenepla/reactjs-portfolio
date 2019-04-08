import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Jump from 'react-reveal/Jump';
import Animation from './animation';
import Resume from './resume';

class Landing extends Component {
  constructor(props) {
    super(props);
      
  }

  render() {
    return(
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="social-links">
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <Jump when={true}>
                <i className="fa fa-github" aria-hidden="true" />
              </Jump>
              </a>

              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <Jump when={true}>
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </Jump>
              </a>

              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <Jump when={true}>
                <i className="fa fa-skype" aria-hidden="true" />
              </Jump>
              </a>
          </div>
          <Animation className='animation'/>
          </Cell>
          <Resume/>
        </Grid>
    )
  }
}

export default Landing;
