import React from 'react';
import styled from 'styled-components';

const Container = styled.div` 
  display: flex;
`;

const H5 = styled.h5`
  color: #1f0c70;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const WorkTimeP = styled.p`
  margin-left: 6px;
`;



export default function Experience(props) {
    return (
      <div>
        <H5>{props.jobName}</H5>
        <Container>
          <i className="fa fa-calendar" aria-hidden="true" />
          <WorkTimeP>{props.workTime}</WorkTimeP>
          <i style={{marginLeft:'10px', marginRight:'5px'}} className="fa fa-map-marker" aria-hidden="true" />
          <p>{props.workLocation}</p>
        </Container>  
          <p style={{marginTop: '10px'}}>{props.jobDescription}</p> 
      </div> 
    )
  }
