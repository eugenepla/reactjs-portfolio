import React, { Component } from 'react';
import styled from 'styled-components';
import ProgressText from './progressText';

const Container = styled.div`
  minWidth: 600px;
`;

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
      <div>
        <Container>
        <div style={{
            top: '-10px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <ProgressText
              text={'Eugene Plahotnikov. Beginner JavaScript Developer'}
              placeholderTextColor={'	transparent'}
              progressTextColor={'#0B032D'}
              renderText={(props, text) => <h4 {...props}>{text}</h4>}
              progress={progress}
              springOptions={springOptions}/>
          </div>
        </Container>
      </div>
    );
  }
}
