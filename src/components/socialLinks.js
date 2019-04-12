import React from 'react';
import {Grid, Cell} from 'react-mdl';

export default function socialLinks(props) {
    return (
        <Grid className="social-links">  
              <Cell col={6} className='leftSocial'>

              <div className='phone-mail-div'>
                <i className="fa fa-phone" aria-hidden="true" />
                <h7>+380662575199</h7>
                <i className="fa fa-envelope" aria-hidden="true" />
                <h7>plahotnikovvv@gmail.com</h7>
                <i className="fa fa-map-marker" aria-hidden="true" />
                <h7>Kharkiv, Ukraine</h7>

              </div>
              </Cell>

              <Cell col={6} className='rightSocial'>

              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github" aria-hidden="true" />
              </a>

              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>

              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-skype" aria-hidden="true" />
              </a>

              </Cell>
          </Grid>
    );
};