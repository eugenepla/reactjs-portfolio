import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Languages from './languages';


export default class Resume extends Component {
  render() {
    let data = this.props.data;
    return(
      <div>
        <Grid>
          <Cell col={6}>

        <h4 style={{fontWeight: "bolder", marginBottom: '5px'}}>EXPERIENCE</h4>
        <hr style={{borderTop: '3px solid black', marginTop: '0px'}} />
        {data.experience && data.experience.map((item)=>{
          return(
        <Experience
        workTime={item.workTime}
        workLocation={item.workLocation}
        jobName={item.jobName}
        jobDescription={item.jobDescription}
        />)
        })}
        <hr style={{borderTop: 'dotted 1px'}} />


        <h4 style={{fontWeight: "bolder", marginBottom: '5px'}}>SKILLS</h4>
        <hr style={{borderTop: '3px solid black', marginTop: '0px'}} /> 
        {data.skills && data.skills.map((item)=>{
          return(
        <Skills
        jobExpTitle={item.jobExpTitle}
        jobTechnologies={item.jobTechnologies}
        jobTechLevel={item.jobTechLevel}
        noCommercialTitle={item.noCommercialTitle}
        noCommercialTechs={item.noCommercialTechs}
        noCommercialTechLevel={item.noCommercialTechLevel}
        moreSkillsTitle={item.moreSkillsTitle}
        moreSkillsTechs={item.moreSkillsTechs}
        moreSkillsLevel={item.moreSkillsLevel}
        />)
        })}
        </Cell>
          
        <Cell col={1}/>
        <Cell col={5}>

        <h4 style={{fontWeight: "bolder", marginBottom: '5px'}}>EDUCATION</h4>
        <hr style={{borderTop: '3px solid black', marginTop: '0px'}} /> 
          {data.education && data.education.map((item)=>{
            return(
          <Education
          studyTime={item.studyTime}
          schoolName={item.schoolName}
          schoolDescription={item.schoolDescription}
          />)
          })}
        <hr style={{borderTop: 'dotted 1px'}} />


        <h4 style={{fontWeight: "bolder", marginBottom: '5px'}}>LANGUAGES</h4>
        <hr style={{borderTop: '3px solid black', marginTop: '0px'}} /> 
          {data.languages && data.languages.map((item)=>{
            return(
          <Languages 
          native={item.native}
          foreign={item.foreign}
          />)
          })}
        <hr style={{borderTop: 'dotted 1px'}} /> 

          </Cell>
        </Grid>
      </div>
    )
  }
}
