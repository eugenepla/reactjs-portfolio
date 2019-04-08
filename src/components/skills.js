import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

export default function Skills(props) {
    return(
      <Grid>
        <Cell scol={12}>
          <div style={{display: 'flex'}}>{props.skill} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }

