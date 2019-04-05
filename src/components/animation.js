import React, { Component } from 'react';
import styled from 'styled-components';
import LineAnimate from './lineAnimation';
import ProgressText from './progressText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
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
      this.setState({ progress: 33 });
    }, 0);
    setTimeout(() => {
      this.setState({ progress: 67 });
    }, 800);
    setTimeout(() => {
      this.setState({ progress: 100 });
    }, 1600);
  }

  render() {
    const springOptions = { stiffness: 34, damping: 11 };
    const { progress } = this.state;

    return (
      <div>
        <Container>
        <div style={{
            textAlign: 'center',
            position: 'relative'
          }}>
            <ProgressText
              text={'Eugene Plahotnikov'}
              placeholderTextColor={'white'}
              progressTextColor={'#0B032D'}
              renderText={(props, text) => <h2 {...props}>{text}</h2>}
              progress={progress}
              springOptions={springOptions}/>
          <div style={{
            textAlign: 'center',
            position: 'relative'
          }}>
            <ProgressText
              text={'Beginner JavaScript Developer'}
              placeholderTextColor={'white'}
              progressTextColor={'#0B032D'}
              renderText={(props, text) => <h1 {...props}>{text}</h1>}
              progress={progress}
              springOptions={springOptions}/>
          </div>
            <LineAnimate
              style={{
                position: 'absolute',
                bottom: -5,
                left: '28.95%'
              }}
              placeholderStrokeColor={'rgba(116, 84, 106, 0.4)'}
              progressStrokeColor={'#0B032D'}
              progress={progress}
              springOptions={springOptions}/>
          </div>
        </Container>
      </div>
    );
  }
}
