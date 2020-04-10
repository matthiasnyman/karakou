import React from 'react';

class VHeader extends React.Component {
  render() {
    return (
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          width: '100%',
          left: 0,
          top: 0,
        }}
      >
        <source src="./karakouvideo.mp4" type="video/mp4" />
      </video>
    );
  }
}

export default VHeader;
