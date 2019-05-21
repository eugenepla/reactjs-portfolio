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
        <div className="projects-grid">
          <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
            <img style={{height: '300px' }} src="https://i.ibb.co/FB79hsz/merge-from-ofoct.jpg" />
            <CardTitle style={{paddingBottom: '0px'}}>Music player test-task</CardTitle>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: 'blue'}} />
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
            <img style={{height: '300px'}} src="https://i.ibb.co/4dtyCLw/photo-2019-05-21-13-29-38.jpg" />
            <CardTitle style={{paddingBottom: '0px'}}>This portfolio project</CardTitle>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: 'blue'}} />
          </Card>
        </div>
      )
    }
  }
  render() {
    return (
      <div style={{marginTop: '10px'}}>
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
