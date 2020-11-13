import React from 'react';
import './CheckListItem.css'
import listCircle from '../../assets/Ellipse 176.png'
import { useHistory, useParams } from 'react-router-dom';
import openIcon from '../../assets/Path 131.png'

const CheckListItem = (props) => {
  const params = useParams();
  const history = useHistory();
  const isOpen = params.id === props.item.id;

  function clickHandler(mouseEvent){

    let route = `/details/${props.item.id}`;

    if(isOpen){
      route = '/details';
    }

    history.push(route);
  } 

  function itemDone(){
    typeof props.onDone === "function" && props.onDone(props.item.id);
  } 

  return (
    <div className="App-CheckListItem-container"> 
      <div className="App-CheckListItem" onClick={clickHandler}>
        <img className={`item-icon ${props.item.isDone ? 'item-done' : ''}`} src={listCircle} alt='done' />
        <div className="item-title">{props.item.title}</div>
        <div className="item-description">{props.item.description}</div>
        <img className={`item-open ${isOpen ? 'item-isopen' : ''}`} src={openIcon} alt="open" />
      </div>
      {isOpen && <div className="item-component">
        {React.cloneElement(props.item.component, { onDone: itemDone})}
        {/* {props.item.component} */}
      </div>}
    </div>
  );
};

export default CheckListItem;