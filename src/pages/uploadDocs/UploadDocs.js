import React from 'react';
import UploadCard from '../../components/uploadCard/UploadCard';
import './UploadDocs.css'

const UploadDocs = () => {
  return (
    <div className="App-UploadDocs">
        <UploadCard />
        {/* or */}
        <UploadCard />
    </div>
  );
};

export default UploadDocs;