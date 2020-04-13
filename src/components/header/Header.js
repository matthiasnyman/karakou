import React from 'react';
import spotify from '../../assets/Spotify.svg';
import instagram from '../../assets/Instagram.svg';
import classes from './header.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {

  const spotifyLink = 'https://open.spotify.com/artist/4eLoWgIQ8bNC5mXpFgewSq';
  const instagramLink = 'https://www.instagram.com/karakou/?hl=sv';

  return (
    <div className={classes.head}>
      <div className={classes.layout}>


        <Link to="bio">Bio</Link>
        <Link to="tour">Turné</Link>

        <Link to="top">
          <h1>KARAKOU</h1>
        </Link>
        <Link to="kontakt">Kontakt</Link>

        <div className={classes.media}>
          <a className={classes.img} href={spotifyLink}>
            <img className={classes.headerImg} src={spotify} alt="spotify" />
          </a>
          <a href={instagramLink}>
            <img className={classes.img} src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
