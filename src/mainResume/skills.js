import React from 'react'
import styled from 'styled-components'

const H5 = styled.h5`
  color: #1f0c70;
  margin-top: 10px;
  margin-bottom: 15px;
`

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
  return (
    <div>
      <H5>{props.jobExpTitle}</H5>
      <H6>{props.jobTechnologies}</H6>
      <P>{props.jobTechLevel}</P>
      <hr style={{borderTop: 'dotted 1px'}} />

      <H5>{props.noCommercialTitle}</H5>
      <H6>{props.noCommercialTechs}</H6>
      <P>{props.noCommercialTechLevel}</P>
      <hr style={{borderTop: 'dotted 1px'}} />

      <H5>{props.moreSkillsTitle}</H5>
      <H6>{props.moreSkillsTechs}</H6>
      <P>{props.moreSkillsLevel}</P>
      <hr style={{borderTop: 'dotted 1px'}} />
    </div>
  )
}

