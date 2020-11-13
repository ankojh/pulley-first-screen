import { useContext, useState } from 'react';
import './App.css';
import { ResizeContext } from './contexts/resizeContext';
import AddDetails from './pages/addDetails/AddDetails';
import UploadDocs from './pages/uploadDocs/UploadDocs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const { isWideScreen } = useContext(ResizeContext);

  const [screen, setScreen] = useState('upload');

  return (
    <Router>
      <div className={`App ${isWideScreen ? 'wide-screen' : ''}`}>
        <div className="App-Heading"> Let's Create your Cap Table! </div>

        <Switch>
          <Route path="/details">
            <AddDetails />
          </Route>
          <Route path="/">
            <UploadDocs />
          </Route>
        </Switch>

        {/* <div className="App-Heading-Description">Select how you would like to create your cap table.</div> */}

      </div>
    </Router>
  );
}

export default App;
