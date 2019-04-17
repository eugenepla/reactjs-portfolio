import React from 'react';
import styled from 'styled-components';

const H5 = styled.h5`
  color: #1f0c70;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const H6 = styled.h6`
  margin-top: -10px;
  font-weight: bolder;
`
const P = styled.p`
  margin-top: -15px;
  font-weight: bolder;
  color: green;

`

export default function Skills(props) {
    return(
      <div>
          <H5>Job experience:</H5>
          <H6>JavaScript, React.js, React-UI, HTML/CSS</H6>
          <P>upper-beginner level</P>
          <hr style={{borderTop: 'dotted 1px'}} />

          <H5>No commercial experience:</H5>
          <H6>Node.js(Express.js), MongoDB(mongoose), Webpack</H6>
          <P>beginner level</P>
          <hr style={{borderTop: 'dotted 1px'}} />

          <H5>More skills:</H5>
          <H6>Git(github, bitbucket), robo3t, Linux(Ubuntu)</H6>
          <P>upper-beginner level</P>
          <hr style={{borderTop: 'dotted 1px'}} />
      </div>
    )
  }

