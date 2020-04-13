import React from 'react';
import classes from './album.module.scss';


const AlbumComponant = props => {
  const { name, link, image  } = props.props;
  return (
    <a className={classes.album} href={link} key={props.name} >
      <img className={classes.image} src={image} alt={name}  />
      {name}
    </a>
  )
}

export default AlbumComponant;