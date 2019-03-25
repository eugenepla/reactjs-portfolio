import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../css/slider.css';


const slideImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-pTYMS5m1Cd8wylhEaHwmBAVc0P2wn9eQLEmx2wfeKA3CDbT',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow;