import React from 'react';
import classes from './BackgroundVideo.module.scss';
import videoSource from '../../assets/karakouvideo.mp4';
import spotify from '../../assets/Spotify.svg';
import instagram from '../../assets/Instagram.svg';

const BackgroundVideo = () => {
  const spotifyLink = 'https://open.spotify.com/artist/4eLoWgIQ8bNC5mXpFgewSq';
  const instagramLink = 'https://www.instagram.com/karakou/?hl=sv';

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

      <div className={classes.Content}>
        <div className={classes.media}>
          <a href={spotifyLink}>
            <img src={spotify} alt="spotify" />
          </a>
          <a href={instagramLink}>
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};


export default BackgroundVideo;
