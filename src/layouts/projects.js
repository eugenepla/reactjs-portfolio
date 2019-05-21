import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu } from 'react-mdl'
import styled from 'styled-components'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid" style={{paddingTop: '35px'}}>
          <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
            <img style={{height: '300px' }} src="https://i.ibb.co/FB79hsz/merge-from-ofoct.jpg" />
            <CardTitle style={{paddingBottom: '0px'}}>Music player test-task</CardTitle>
            <CardActions border>
              <a href='https://github.com/eugenepla/ReactNative-MusicPlayer' rel="noopener noreferrer" target="_blank">
                <i style={{fontSize: '30px', color: 'slateblue', paddingTop: '3px', paddingLeft: '10px'}} className="fa fa-github" aria-hidden="true" />
              </a>
            </CardActions>
            <CardMenu style={{color: 'blue'}} />
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid" style={{paddingTop: '35px'}}>
          <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
            <img style={{height: '300px'}} src="https://i.ibb.co/4dtyCLw/photo-2019-05-21-13-29-38.jpg" />
            <CardTitle style={{paddingBottom: '0px'}}>Portfolio project</CardTitle>
            <CardActions border>
              <a href='https://github.com/eugenepla/react-portfolio' rel="noopener noreferrer" target="_blank">
                <i style={{fontSize: '30px', color: 'slateblue', paddingTop: '3px', paddingLeft: '10px'}} className="fa fa-github" aria-hidden="true" />
              </a>
            </CardActions>
            <CardMenu style={{color: 'blue'}} />
          </Card>
        </div>
      )
    }
  }
  render() {
    return (
      <div style={{marginTop: '20px'}}>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React Native</Tab>
          <Tab>React</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects
/**<CardTitle style={{height: '550px', background: 'url(https://i.ibb.co/FB79hsz/merge-from-ofoct.jpg) no-repeat center'}} >Music Player test-task</CardTitle> */
