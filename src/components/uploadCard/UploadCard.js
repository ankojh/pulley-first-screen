import React from 'react';
import './UploadCard.css'
const UploadCard = (props) => {
  return (
    <div className="App-UploadCard">
      <img className="UploadCard-Icon" alt="logo" src={props.icon}></img>
      <span className="UploadCard-Title">{props.title}</span>
      <span className="UploadCard-Description">{props.description}</span>
    </div>
  );
};

export default UploadCard;