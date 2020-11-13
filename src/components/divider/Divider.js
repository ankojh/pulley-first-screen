import React, { useContext } from 'react';
import { ResizeContext } from '../../contexts/resizeContext';
import './Divider.css'

const Divider = (props) => {

  const {isWideScreen} = useContext(ResizeContext)

  return (
    <div className={`App-Divider ${isWideScreen ? 'wide-screen' : ''}`}>
      {props.text && <span className="divider-text" style={{ marginLeft: props.left }}>{props.text}</span>}
      <div className="divider-line"></div>
    </div>
  );
};

export default Divider;