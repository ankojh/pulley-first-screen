import React from 'react';
import './UploadCard.css'
const UploadCard = (props) => {

  function clickHandler(mouseEvent){
    typeof props.onClick === 'function' && props.onClick(mouseEvent) 
  }

  return (
    <div className="App-UploadCard" onClick={clickHandler}>
      <img className="UploadCard-Icon" alt="logo" src={props.icon}></img>
      <span className="UploadCard-Title">{props.title}</span>
      <span className="UploadCard-Description">{props.description}</span>
    </div>
  );
};

export default UploadCard;