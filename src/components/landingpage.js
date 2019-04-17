import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Animation from './animation';
import Resume from './resume';
import SocialLinks from './socialLinks';
import Avatar from './avatar';
import data from '../data';

export default class Landing extends Component {
  render() {
    return(
        <Grid className="landing-grid">
          <Cell col={12}>
          <Avatar/>
          <Animation className='animation'/>
          <SocialLinks/>
          </Cell>
          <Resume data={data}/>
        </Grid>
    )
  }
}

