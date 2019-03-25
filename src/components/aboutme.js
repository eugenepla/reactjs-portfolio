import React, { Component } from 'react';
import MyMap from './map';
import Slideshow from './slider';
import WeatherApp from './weather/weatherApp';

class About extends Component {
  render() {

    return (
      <div className="aboutme-body">
        <h2 className="aboutme-text">This is my cat!</h2>
        <Slideshow />
        <h2 className="aboutme-text">She lives here!</h2>
        <MyMap />
        <WeatherApp />
      </div >
    );
  }
}

export default About;
