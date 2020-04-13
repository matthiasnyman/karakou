import React from 'react';
import TourComponant from './TourComponent';

const tour = (props) => {
  const tourList = props.tour.map(a => (
    <TourComponant key={a.date + a.city} props={a} />
  ));

  return (
    <div>
      <h2 className="header">Dansa med oss</h2>
      <div>{tourList}</div>
    </div>
  );
};

export default tour;
