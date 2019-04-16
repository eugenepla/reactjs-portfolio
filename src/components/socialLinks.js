import React from 'react';
import {Cell} from 'react-mdl';

export default function socialLinks(props) {
    return (
      <div className='social-links'>

              <Cell col={12} className='topSocial'>
                
              <div className='phone-mail-div'>
                <i className="fa fa-phone" aria-hidden="true" />
                <h6 style={{fontSize: '15px'}}>+380662575199</h6>

                <i className="fa fa-envelope" aria-hidden="true" />
                <h6 style={{fontSize: '15px'}}>plahotnikovvv@gmail.com</h6>
                
                <i className="fa fa-map-marker" aria-hidden="true" />
                <h6 style={{fontSize: '15px'}}>Kharkiv, Ukraine</h6>
              </div>
              </Cell>

              <Cell col={12} className='bottomSocial'>

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
      </div>        
    );
};