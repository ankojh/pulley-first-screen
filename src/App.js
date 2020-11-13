import { useContext } from 'react';
import './App.css';
import { ResizeContext } from './contexts/resizeContext';
import AddDetails from './pages/addDetails/AddDetails';
import UploadDocs from './pages/uploadDocs/UploadDocs';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const { isWideScreen } = useContext(ResizeContext);

  return (
    <Router>
      <div className={`App ${isWideScreen ? 'wide-screen' : ''}`}>
        <div className="App-Heading"> Let's Create your Cap Table! </div>

        <Switch>
          <Route path="/details/:id" component={AddDetails} />
          <Route path="/details" component={AddDetails} />
          <Route path="/" component={UploadDocs} />
          <Route path="*" component={UploadDocs} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
