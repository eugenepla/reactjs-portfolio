import React, { Component } from 'react';
import ProgressText from './progressText';

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ progress: 41 });
    }, 1000);
    setTimeout(() => {
      this.setState({ progress: 100 });
    }, 2200);
  }

  render() {
    const springOptions = { stiffness: 34, damping: 11 };
    const { progress } = this.state;

    return (
      <div style={{marginBottom: '-15px'}}>
        <div style={{
            top: '-5px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <ProgressText
              text={'Eugene Plahotnikov'}
              placeholderTextColor={'	transparent'}
              progressTextColor={'#0B032D'}
              renderText={(props, text) => <h4 {...props}>{text}</h4>}
              progress={progress}
              springOptions={springOptions}/>
          </div>
          <div style={{
            top: '-15px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <ProgressText
              text={'Beginner JavaScript Developer'}
              placeholderTextColor={'	transparent'}
              progressTextColor={'#0B032D'}
              renderText={(props, text) => <h4 {...props}>{text}</h4>}
              progress={progress}
              springOptions={springOptions}/>
          </div>
      </div>
    );
  }
}
