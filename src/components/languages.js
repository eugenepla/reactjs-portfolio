import React from 'react';
import { Grid, Cell, Chip } from 'react-mdl';
import langCircles from './langCircles';

export default function Languages(props) {
    return(
      <Grid style={{padding: '0px'}}>
        <Cell style={{margin: '0px'}} col={6}>
          <h6 style={{fontWeight: 'bold', marginTop: '5px', marginBottom: '5px'}}>{props.native}</h6>
          <h7>Native</h7>
          <h6 style={{fontWeight: 'bold', marginBottom: '5px'}}>{props.foreign}</h6>
          <h7>Pre-intermediate</h7>
        </Cell>
        <Cell col={6}>
        </Cell>  
      </Grid> 
    )
  }
