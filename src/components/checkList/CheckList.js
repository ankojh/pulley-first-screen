import React from 'react';
import { useHistory } from 'react-router-dom';
import CheckListItem from '../checkListItem/CheckListItem';
import './CheckList.css'


const CheckList = (props) => {
  const history = useHistory();

  function itemDoneHandler(itemId, moveToNext) {
    const list = [...props.list];
    const itemIndex = list.findIndex(item => item.id === itemId)
    const item = list[itemIndex];
    item.isDone = !item.isDone;
    props.setList(list);

    if (moveToNext) {
      const nextItem = list[itemIndex + 1];
      if (nextItem) {
        history.push(`/details/${nextItem.id}`)
      }
      else {
        history.push('/details');
      }
    }
  }

  return (
    <div className="App-Checklist">
      {props.list.length
        && props.list.map(item => <CheckListItem key={item.id} item={item} onDone={itemDoneHandler} />)}
    </div>
  );
};

export default CheckList;
