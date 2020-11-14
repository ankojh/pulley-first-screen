import React, { useContext, useEffect, useState } from 'react';
import CheckList from '../../components/checkList/CheckList';
// import UploadButton from '../../components/uploadButton/UploadButton';
import './AddDetails.css'
import detailsList from '../../config/detailsListConfig'
// import backIcon from '../../assets/Path 131.png'
import backIcon from '../../assets/Path 131.svg'
import { useHistory } from 'react-router-dom';
import { ResizeContext } from '../../contexts/resizeContext';

const AddDetails = () => {

  const [list, setList] = useState([...detailsList])
  const [isAllDone, setIsAllDone] = useState(false)
  const {isWideScreen} = useContext(ResizeContext)

  useEffect(()=>{
    const item = list.find(item=>!item.isDone);
    if(!item){
      setIsAllDone(true)
    }
    else{
      setIsAllDone(false)
    }
  },[list])

  const history = useHistory();

  function backClickHandler(){
    history.push('/')
  }

  return (
    <div className={`App-AddDetails ${isWideScreen ? 'wide-screen' : ''}`}>
      <div className="details-description">Stuck on what to do? You can always come back here to check on what else you’ll need to add to complete your cap table.</div>

      <div onClick={backClickHandler} className="details-go-back">
        <img src={backIcon} alt="back-icon" />
        <span>Upload Investment Documents</span>
      </div>
      <CheckList list={list} setList={setList} />

      {isAllDone && <div className="finish-message">Hurray! All Done.</div>}
    </div>
  );
};

export default AddDetails;