import React, { useContext } from 'react';
import Divider from '../../components/divider/Divider';
import UploadCard from '../../components/uploadCard/UploadCard';
import './UploadDocs.css'
// import excelIcon from '../../assets/noun_excel_150055 (3) 3.png'
// import papersIcon from '../../assets/noun_papers_2044084 (1) 1.png'
import excelIcon from '../../assets/noun_excel_150055 (3) 3.svg'
import papersIcon from '../../assets/noun_papers_2044084 (1) 1.svg'
import { useHistory } from 'react-router-dom';
import { ResizeContext } from '../../contexts/resizeContext';

const UploadDocs = () => {

  const history = useHistory();
  const {isWideScreen} = useContext(ResizeContext)

  function uploadCardClicked(cardId){ 
    history.push('details');
  }

  return (
    <div className={`App-UploadDocs ${isWideScreen ? 'wide-screen': ''}`}>
      <div className="upload-description">Select how you would like to create your cap table.</div>

      <UploadCard
        id="spreadsheet"
        onClick={uploadCardClicked}
        icon={excelIcon}
        iconHeight={'67px'}
        title="Upload Spreadsheet"
        description="Download a cap table spreadsheet template, fill it out, upload the completed template."
      />

      <Divider text="Or" left="15%"/>
      
      <UploadCard
        id="investment-doc"
        onClick={uploadCardClicked}
        icon={papersIcon}
        iconHeight={'51px'}
        title="Upload Investment Documents"
        description="Download a cap table spreadsheet template, fill it out, upload the completed template." />
    </div>
  );
};

export default UploadDocs;