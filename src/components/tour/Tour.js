import React from 'react';
import TourComponant from './TourComponent';
import classes from './tour.modules.scss';

const tour = (props) => {
  console.log(props.tour);
  const tourList = props.tour.map((a) => <TourComponant props={a} />);

  return (
    <div>
      <h2 className={classes.tourHeader}>Dansa med oss</h2>
      <div className={classes.container}>{tourList}</div>
    </div>
  );
};

export default tour;
