import React, {Component} from 'react';
import styled from 'styled-components';

const Circle = styled.i`
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize};
`

export default class langCircles extends Component {
    render() {
    const {color, size} = this.props;

    return (
        <div>
          <Circle className="fa fa-circle" aria-hidden="true" color={color} fontSize={size}></Circle>      
        </div>
    );
};
}