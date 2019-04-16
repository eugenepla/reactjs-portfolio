import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Circle from './langCircles'

export default function Languages(props) {
    return(
      <Grid style={{padding: '0px'}}>
        <Cell style={{margin: '0px'}} col={6}>
          <h6 style={{fontWeight: 'bold', marginTop: '5px', marginBottom: '5px'}}>{props.native}</h6>
          <h6>Native</h6>
          <h6 style={{fontWeight: 'bold', marginBottom: '5px'}}>{props.foreign}</h6>
          <h6>Intermediate</h6>
        </Cell>
        <Cell col={6}>
         <div style={{display: 'flex', justifyContent:'center', height: '50%'}}>
            <Circle size='x-large' color='blue'/>
            <Circle size='x-large' color='blue'/>
            <Circle size='x-large' color='blue'/>
            <Circle size='x-large' color='blue'/>
            <Circle size='x-large' color='blue'/>
         </div>
         <div style={{display: 'flex', justifyContent:'center', height: '50%'}}>
            <Circle size='x-large' color='blue'/>
            <Circle size='x-large' color='blue'/>
            <Circle size='x-large'/>
            <Circle size='x-large'/>
            <Circle size='x-large'/>
         </div>
        </Cell>  
      </Grid> 
    )
  }
