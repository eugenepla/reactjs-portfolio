import React, { Component } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const ProgressTextDiv = styled.div`
  position: relative;
  display: inline-block;
  color: ${({color}) => color};
`;

const ProgressDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: ${({color}) => color};
`;

export default class ProgressText extends Component {

  static defaultProps = {
    springOptions: {},
    progress: 0,
  }

  render() {
    const {
      springOptions,
      progress,
      renderText,
      text,
      placeholderTextColor,
      progressTextColor
    } = this.props;

    const textStyle = {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    };
    const _renderText = renderText ?
      renderText :
      (props, text) => <h4 {...props}>{text}</h4>;

    return (
      <ProgressTextDiv color={placeholderTextColor}>
        {_renderText({}, text)}
        <ProgressDiv color={progressTextColor}>
          <Motion
            style={{ width: spring(progress, springOptions) }}>
            {({ width }) =>
              _renderText({ style: {
                ...textStyle,
                width: `${width}%`
              }}, text)
            }
          </Motion>
        </ProgressDiv>
      </ProgressTextDiv>
    );
  }
}