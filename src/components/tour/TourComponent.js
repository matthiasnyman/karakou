import React from 'react';
import classes from './tour.module.scss';

const TourComponent = (props) => {
  console.log(props.props);
  const { city, venue, date, link } = props.props;

  return (
    <>
      <div className={classes.layout}>
        <div>
          <h4 className={classes.location}>
            {city}, {venue}
          </h4>
          <h5 className={classes.date}>{date}</h5>
        </div>

        <button className={classes.button} href={link}>
          Biljetter
        </button>
      </div>
      <hr className={classes.hr} />
    </>
  );
};

export default TourComponent;
