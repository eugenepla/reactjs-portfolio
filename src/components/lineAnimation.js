import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class LineAnimate extends Component {

  static defaultProps = {
    springOptions: {},
    progress: 0
  }

  render() {
    const {
      springOptions,
      progress,
      placeholderStrokeColor,
      progressStrokeColor,
      ...others
    } = this.props;

    return (
      <Motion
        style={{ progress: spring(progress, springOptions) }}>
        {({ progress }) =>
          <svg {...others} width="40%" height="7px" viewBox="-1 -1 75 7">
            <polyline
              stroke={placeholderStrokeColor}
              strokeWidth="2"
              fill="none"
              points="0 2.5 3 5 8 0 14 5 19 0 25 5 30 0 36 5 41 0 47 5 52 0 58 5 63 0 69 5 73 1 "></polyline>
            <polyline
              style={{
                strokeDasharray: 100,
                strokeDashoffset: 100 - progress
              }}
              stroke={progressStrokeColor}
              strokeWidth="2"
              fill="none"
              points="0 2.5 3 5 8 0 14 5 19 0 25 5 30 0 36 5 41 0 47 5 52 0 58 5 63 0 69 5 73 1"></polyline>
          </svg>
        }
      </Motion>
    );
  }
}