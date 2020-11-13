import React from 'react';
import './CheckListItem.css'
import listCircle from '../../assets/Ellipse 176.png'
import UploadButton from '../uploadButton/UploadButton';

const CheckListItem = (props) => {
  return (
    <>
      <div className="App-CheckListItem">
        <img className={`item-icon ${props.item.isDone ? 'item-done' : ''}`} src={listCircle} alt='done' />
        <div className="item-title">{props.item.title}</div>
        <div className="item-description">{props.item.description}</div>
      </div>
      {props.item.isOpen && <div className="item-component">
        <UploadButton />
      </div>}
    </>
  );
};

export default CheckListItem;