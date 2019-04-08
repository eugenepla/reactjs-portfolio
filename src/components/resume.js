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

        <h3 style={{color: '#1f0c70'}}>Experience</h3>
        <hr style={{borderTop: '2px solid black'}} />

        <Experience
        start={'1'}
        end={'2'}
        jobName="Trainee JavaScript Developer"
        jobDescription="We created api for trucking industry. I used es6, React, Axios,
                        Semantic-UI. I understood how work in team with SCRUM
                        methodology, how to work with git (bitbucket). Got a little experience
                        with Redux, improved knowledge of Linux Ubuntu)."
        />

        <h3>Skills</h3>
        <hr style={{borderTop: '2px solid black'}} /> 
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
         
          </Cell>


          <Cell className="resume-right-col" col={6}>
            <h3>Education</h3>
            <hr style={{borderTop: '2px solid black'}} /> 

            <Education
              start={2002}
              end={2006}
              schoolName="My IT-climb Full-Stack JavaScript Course"
              schoolDescription="I started to learn JavaScript with simulation of SCRUM real-project."
               />

            <Languages 

            />   

          </Cell>
        </Grid>
      </div>
    )
  }

