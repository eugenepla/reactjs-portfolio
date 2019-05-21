import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
  display: flex;
`

const H5 = styled.h5`
  color: #1f0c70;
  margin-top: 10px;
  margin-bottom: 15px;
`

const WorkTimeP = styled.p`
  margin-left: 6px;
`

export default function Education(props) {
  return (
    <div>
      <H5>{props.schoolName}</H5>
      <Container>
        <i className="fa fa-calendar" aria-hidden="true" />
        <WorkTimeP>{props.studyTime}</WorkTimeP>
      </Container>
      <p style={{marginTop: '10px'}}>{props.schoolDescription}</p>
    </div>    
  )
}

