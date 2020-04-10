import React from 'react';

const Album = (props) => {
  console.log(props.album)
  return (
  <div className="album">
    <h2>Något att lyssna på</h2>
    <div>
      {/* { album } */}
    </div>
  </div>
  )
};

export default Album;
