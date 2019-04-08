import React from 'react';

export default function Languages(props) {
    return(
      <div>
          <h5>{props.start} - {props.end}</h5>
          <h4 style={{marginTop:'0px'}}>{props.schoolName}</h4>
          <p>{props.schoolDescription}</p>
      </div>    
    )
  }
