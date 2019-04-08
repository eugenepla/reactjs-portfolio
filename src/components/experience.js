import React from 'react';

export default function Experience(props) {
    return(
      <div>
          <h5>{props.start} - {props.end}</h5>
          <h4 style={{marginTop:'0px'}}>{props.jobName}</h4>
          <p>{props.jobDescription}</p>
      </div>    
    )
  }
