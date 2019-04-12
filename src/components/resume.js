import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Languages from './languages';


export default function Resume(props) {
    return(
      <div>
        <Grid>
          <Cell col={6}>

        <h4 style={{fontWeight: "bolder", marginBottom: '5px'}}>EXPERIENCE</h4>
        <hr style={{borderTop: '3px solid black', marginTop: '0px'}} />
        <Experience
        workTime={'3 Monthes'}
        workLocation={'Kharkiv'}
        jobName="Intern JavaScript Developer"
        jobDescription="We created api for trucking industry. I used es6, React, Axios,
                        Semantic-UI. I understood how work in team with SCRUM
                        methodology, how to work with git (bitbucket). Got a little experience
                        with Redux, improved knowledge of Linux Ubuntu)."
        />
        <hr style={{borderTop: 'dotted 1px'}} />


        <h4 style={{fontWeight: "bolder", marginBottom: '5px'}}>SKILLS</h4>
        <hr style={{borderTop: '3px solid black', marginTop: '0px'}} /> 
              <Skills
                skill="javascript"
                progress={100}
                />
              <Skills
                skill="HTML/CSS"
                progress={80}
                  />
              <Skills
                skill="NodeJS"
                progress={50}
                />
              <Skills
                skill="React"
                progress={25}
                /> 
        <hr style={{borderTop: 'dotted 1px'}} />        
          </Cell>
          <Cell col={1}/>


          <Cell col={5}>
            <h4 style={{fontWeight: "bolder", marginBottom: '5px'}}>EDUCATION</h4>
            <hr style={{borderTop: '3px solid black', marginTop: '0px'}} /> 
            <Education
              studyTime={'3 Monthes'}
              schoolName="IT-climb JavaScript Course"
              schoolDescription="I started to learn JavaScript with simulation of SCRUM real-project."
               />
            <hr style={{borderTop: 'dotted 1px'}} />


            <h4 style={{fontWeight: "bolder", marginBottom: '5px'}}>LANGUAGES</h4>
            <hr style={{borderTop: '3px solid black', marginTop: '0px'}} /> 
            <Languages 
              native={'Ukrainian, Russian'}
              foreign={'English'}
            />  
            <hr style={{borderTop: 'dotted 1px'}} /> 

          </Cell>
        </Grid>
      </div>
    )
  }

