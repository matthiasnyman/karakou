import React from 'react';

const Bandet = (props) => {
  return(
    <div ref={props.bio} className="section">
      <h3 className="header" >Om bandet</h3>
      <p className="paragrafs" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor commodo sed felis, phasellus facilisi dui metus, scelerisque id. Id at aliquam vel feugiat varius. Curabitur senectus eget tellus tellus id cursus in. Enim nisl varius nec purus.</p>
    </div>

  )
}

export default Bandet;