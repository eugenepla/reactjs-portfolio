import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../css/landing.css';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner">
              <h1>Beginner JavaScript Developer</h1>

              <hr />

              <p>HTML/CSS | JavaScript | React | NodeJS | MonboDB</p>
              <div className="social-links">
                <a href="https://github.com/eugenepla" rel="noopener noreferrer" target="_blank">
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  />
                </a>
                <a href="skype:svetlanovich3?chat" rel="noopener noreferrer" target="_blank">
                  <i
                    className="fa fa-skype"
                    aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100007864248531" rel="noopener noreferrer" target="_blank">
                  <i
                    className="fa fa-facebook-square"
                    aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div >
    );
  }
}

export default Landing;
