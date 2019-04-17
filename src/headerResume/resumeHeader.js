import React, { Component } from 'react';
import { Cell } from 'react-mdl';
import Animation from './animation/animation';
import SocialLinks from './socialLinks';
import Avatar from './avatar';

export default class resumeHeader extends Component {
    render() {
        let data = this.props.data;
        return (
            <Cell col={12}>   
              <Avatar 
              avatar={data.avatar}
              /> 
              <Animation className='animation'/>
              <SocialLinks/>
            </Cell>  
        );
    }
}
