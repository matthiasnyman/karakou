import React from 'react';
import Album from './Album';
import Turne from './Turne';
import Bio from './Bio';
import Kontakt from './Kontakt'

const Backdrop = (props) => {

  const { album } = props;
  return(
    <div className="backdrop" >
      <Album album={album}  />
      <Turne  />
      <Bio  />
      <Kontakt  />
    </div> 
  );
};

export default Backdrop;
