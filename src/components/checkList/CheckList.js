import React from 'react';
import CheckListItem from '../checkListItem/CheckListItem';
import './CheckList.css'

const CheckList = (props) => {

  

  return (
    <div className="App-Checklist">
      {props.list.length
        && props.list.map(item => <CheckListItem key={item.id} item={item} />)}
    </div>
  );
};

export default CheckList;
