import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
        <Grid className="landing-grid">
          <Cell col={12}>
          <img
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
              alt="avatar"
              className="avatar-img"
            />

            <h1 className="author-name">Plahotnikov Eugene</h1>
            <div className="social-links">


    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-linkedin-square" aria-hidden="true" />
    </a>

    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-github-square" aria-hidden="true" />
    </a>

    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-free-code-camp" aria-hidden="true" />
    </a>


          </div>
            <div className="banner-text">
              <h1>Beginner JavaScript Developer</h1>

              <p>HTML/CSS | JavaScript | React </p>
            </div>
          </Cell>
        </Grid>
    )
  }
}

export default Landing;
