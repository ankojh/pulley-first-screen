import { useState } from 'react';
import './App.css';
import ResizeContextProvider from './contexts/resizeContext';
import AddDetails from './pages/addDetails/AddDetails';
import UploadDocs from './pages/uploadDocs/UploadDocs';

function App() {

  const [screen, setScreen] = useState();

  return (
    <ResizeContextProvider>
      <div className="App">
        <div className="Heading"> Let's Create your Cap Table! </div>
        <div className="Description">Select how you would like to create your cap table.</div>

        <UploadDocs />
        {/* <AddDetails /> */}

      </div>
    </ResizeContextProvider>
  );
}

export default App;
