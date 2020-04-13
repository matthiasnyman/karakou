import React from 'react';
import AlbumComponant from './AlbumComponant'
import classes from './album.module.scss';

const Albums = (props) => {
  const albumList = props.album.map( a => <AlbumComponant key={a.name} props={a}  />)

  return (
  <div>
    <h2 className='header'>Något att lyssna på</h2>
    <div className={classes.container}>
      { albumList }
    </div>
  </div>
  ) 
};

export default Albums;
