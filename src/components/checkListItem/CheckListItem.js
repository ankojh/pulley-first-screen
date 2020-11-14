import React, { useContext } from 'react';
import './CheckListItem.css'
// import listCircle from '../../assets/Ellipse 176.png'
import listCircle from '../../assets/Ellipse 176.svg'
import checkIcon from '../../assets/check-white-18dp.svg'
import { useHistory, useParams } from 'react-router-dom';
// import openIcon from '../../assets/Path 131.png'
import openIcon from '../../assets/Path 131.svg'
import { ResizeContext } from '../../contexts/resizeContext';

const CheckListItem = (props) => {
  const params = useParams();
  const history = useHistory();
  const isOpen = params.id === props.item.id;
  const { isWideScreen } = useContext(ResizeContext);

  function clickHandler(mouseEvent) {
    let route = `/details/${props.item.id}`;

    if (isOpen) {
      route = '/details';
    }

    history.push(route);
  }

  function toggleItemDone(mouseEvent) {
    if(mouseEvent){
      mouseEvent.stopPropagation()
      mouseEvent.nativeEvent.stopImmediatePropagation();
    }

    const moveToNext = mouseEvent ? false : true;
    typeof props.onDone === "function" && props.onDone(props.item.id, moveToNext);
  }

  return (
    <div className={`App-CheckListItem-container ${isWideScreen ? 'wide-screen' : ''}`}>
      <div className="App-CheckListItem" onClick={clickHandler}>
        {!props.item.isDone && <img onClick={toggleItemDone} className='item-icon' src={listCircle} alt='done' />}
        {props.item.isDone && <img onClick={toggleItemDone} className="item-icon-selected" src={checkIcon} alt='done' />}
        <div className="item-title">{props.item.title}</div>
        <div className="item-description">{props.item.description}</div>
        <img className={`item-open ${isOpen ? 'item-isopen' : ''}`} src={openIcon} alt="open" />
      </div>
      {isOpen && <div className="item-component">
        {React.cloneElement(props.item.component, { onDone: toggleItemDone, isDone: props.item.isDone })}
      </div>}
    </div>
  );
};

export default CheckListItem;