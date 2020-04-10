import React from 'react';
import classes from './BackgroundVideo.module.css';
import videoSource from '../assets/karakouvideo.mp4';
import spotify from '../assets/Spotify.svg';

const BackgroundVideo = () => {
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>KARAKOU</h1>
        </div>
      </div>

      <div>
          <img src={spotify}  />
      </div>
    </div>
  );
};

export default BackgroundVideo;
