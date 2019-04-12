import React from 'react';

export default function Education(props) {
    return(
      <div>
          <h5 style={{color: '#1f0c70', marginTop: '10px', marginBottom:'15px'}}>{props.schoolName}</h5>
        <div>
          <i className="fa fa-calendar" aria-hidden="true" />
          <h7 style={{margin:'10px'}}>{props.studyTime}</h7>
        </div>
          <p style={{marginTop: '10px'}}>{props.schoolDescription}</p>
      </div>    
    )
  }

