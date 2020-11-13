import React from 'react';
import './UploadButton.css'

const UploadButton = (props) => {
  function clickHandler(mouseEvent){
    typeof props.onDone === 'function' && props.onDone()
  }




  return (
    <div className='App-UploadButton'>
      <button onClick={clickHandler}> {props.isDone ? 'Remove ' : 'Add ' }{props.text} </button>
    </div>
  );
};

export default UploadButton;