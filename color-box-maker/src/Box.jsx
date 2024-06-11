import React from 'react';
import './Box.css'

function Box({ width, height, backgroundColor }) {
  return (
    <div
      className='box'
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${backgroundColor}`
      }}
    >
    </div>
  );
}

export default Box;
