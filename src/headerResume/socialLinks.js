import React from 'react';
import {Cell} from 'react-mdl';
import styled from 'styled-components';

const H6 = styled.h6`
  font-size: 14px !important;
  margin-top: 10px;
  margin-right: 30px;
  font-family: 'IBM Plex Mono', monospace;
`
const I = styled.i`
  font-size: 20px !important;
`

export default function socialLinks(props) {
    return (
      <div className='social-links'>
      
      <Cell col={12} className='topSocial'>

      <a href={props.github} rel="noopener noreferrer" target="_blank">
        <i className="fa fa-github" aria-hidden="true" />
      </a>

      <a href={props.facebook} rel="noopener noreferrer" target="_blank">
        <i className="fa fa-facebook-square" aria-hidden="true" />
      </a>

      <a href={props.skype} rel="noopener noreferrer" target="_blank">
        <i className="fa fa-skype" aria-hidden="true" />
      </a>

      </Cell>

      <Cell col={12} className='bottomSocial'>
                
      <div className='phone-mail-div' style={{display: 'flex', height: '25px'}}>
        <I className="fa fa-phone" aria-hidden="true" />
        <H6>{props.phoneNumber}</H6>

        <I className="fa fa-envelope" aria-hidden="true" />
        <H6>{props.email}</H6>
                
        <I className="fa fa-home" aria-hidden="true" />
        <H6>{props.homeLocation}</H6>
        </div>
        </Cell>
              
      </div>        
    );
};