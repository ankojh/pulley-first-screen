import React, { useContext } from 'react';
import { ResizeContext } from '../../contexts/resizeContext';
import './UploadCard.css'
const UploadCard = (props) => {


  const {isWideScreen} = useContext(ResizeContext);

  function clickHandler(mouseEvent){
    typeof props.onClick === 'function' && props.onClick(mouseEvent) 
  }

  return (
    <div className={`App-UploadCard ${isWideScreen ? 'wide-screen' : ''}`} onClick={clickHandler}>
      <img className="UploadCard-Icon" alt="logo" src={props.icon} height={props.iconHeight}></img>
      <div className="UploadCard-Text">
        <span className="UploadCard-Title">{props.title}</span>
        <span className="UploadCard-Description">{props.description}</span>
      </div>
    </div>
  );
};

export default UploadCard;