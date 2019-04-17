import React from 'react';
import {Cell} from 'react-mdl';
import styled from 'styled-components';

const H6 = styled.h6`
  margin-top: 10px;
  margin-right: 30px;
`
const I = styled.i`
  font-size: 22px;
`

export default function socialLinks(props) {
    return (
      <div className='social-links'>

              <Cell col={12} className='topSocial'>
                
              <div className='phone-mail-div' style={{display: 'flex'}}>
                <I className="fa fa-phone" aria-hidden="true" />
                <H6 style={{fontSize: '15px'}}>+38(066)257-51-99</H6>

                <I className="fa fa-envelope" aria-hidden="true" />
                <H6 style={{fontSize: '15px'}}>plahotnikovvv@gmail.com</H6>
                
                <I className="fa fa-home" aria-hidden="true" />
                <H6 style={{fontSize: '15px'}}>Kharkiv</H6>
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