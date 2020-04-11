import React from 'react';
import Albums from './album/Albums';
import Tour from './tour/Tour';
import Bio from './Bio';
import Kontakt from './Kontakt'

const Backdrop = (props) => {

  const { album, tour } = props;
  return(
    <div className="backdrop" >
      <Albums album={album}  />
      <Tour tour={tour}  />
      <Bio  />
      <Kontakt  />
    </div> 
  );
};

export default Backdrop;
