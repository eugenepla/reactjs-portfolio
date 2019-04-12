import React from 'react';

export default function Experience(props) {
    return (
      <div>
        <h5 style={{color: '#1f0c70', marginTop: '10px', marginBottom:'15px'}}>{props.jobName}</h5>
          <div>
          <i className="fa fa-calendar" aria-hidden="true" />
          <h7 style={{margin:'10px'}}>{props.workTime}</h7>
          <i style={{marginLeft:'10px', marginRight:'5px'}} className="fa fa-map-marker" aria-hidden="true" />
          <h7>{props.workLocation}</h7>
          </div>
          <p style={{marginTop: '10px'}}>{props.jobDescription}</p>
      </div>    
    )
  }
