import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Animation from './animation';
import Resume from './resume';
import SocialLinks from './socialLinks';

class Landing extends Component {
  render() {
    return(
        <Grid className="landing-grid">
          <Cell col={12}>
          <Animation className='animation'/>
          <SocialLinks/>
          </Cell>
          <Resume/>
        </Grid>
    )
  }
}

export default Landing;
