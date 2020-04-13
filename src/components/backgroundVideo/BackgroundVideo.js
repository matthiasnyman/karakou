import React from 'react';
import classes from './BackgroundVideo.module.scss';
import videoSource from '../../assets/karakouvideo.mp4';

const BackgroundVideo = () => {

  return (
    <div className={classes.Container}>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        id="top"
        className={classes.Video}
      >
        <source src={videoSource} alt="background video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


    </div>
  );
};

export default BackgroundVideo;
