import React from 'react';
import TourComponant from './TourComponent';
import classes from './tour.module.scss';

const tour = (props) => {
  console.log(props.tour);
  const tourList = props.tour.map((a) => <TourComponant props={a} />);

  return (
    <div>
      <h2 className='header'>Dansa med oss</h2>
      <div>{tourList}</div>
    </div>
  );
};

export default tour;
