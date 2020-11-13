import React, { useState } from 'react';
import CheckList from '../../components/checkList/CheckList';
import UploadButton from '../../components/uploadButton/UploadButton';
import './AddDetails.css'
import detailsList from '../../config/detailsListConfig'
import backIcon from '../../assets/Path 131.png'

const AddDetails = () => {

  const [list, setList] = useState([...detailsList])

  return (
    <div className="App-AddDetails">
      <div className="details-go-back">
        <img src={backIcon} alt="back-icon" />
        <span>Upload Investment Documents</span>
      </div>
      <CheckList list={list} />
    </div>
  );
};

export default AddDetails;