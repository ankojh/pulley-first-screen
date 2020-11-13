import React from 'react';
import './Divider.css'

const Divider = (props) => {
  return (
    <div className="App-Divider">
      {props.text && <span className="divider-text" style={{ marginLeft: props.left }}>{props.text}</span>}
      <div className="divider-line"></div>
    </div>
  );
};

export default Divider;