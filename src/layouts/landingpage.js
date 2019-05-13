import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import ResumeHeader from '../headerResume/resumeHeader';
import ResumeMain from '../mainResume/resumeMain';

import data from '../data';

export default class Landing extends Component {
  render() {
    return(
        <Grid className="landing-grid">
          <ResumeHeader data={data}/>
          <ResumeMain data={data}/>
        </Grid>
    )
  }
}

