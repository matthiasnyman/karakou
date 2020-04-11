import React from 'react';

const TourComponent = props => {
  console.log(props.props);
  const { city, venue, date, link } = props.props;

  return (
    <div>
      <h4>{city}, {venue}</h4>
      <h5>{date}</h5>
      <button href={link}>Biljetter</button>
      <hr />
    </div>
  )
}

export default TourComponent;