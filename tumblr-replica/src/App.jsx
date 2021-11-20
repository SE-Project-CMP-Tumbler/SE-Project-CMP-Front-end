import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBarResp from './components/NavigationBarResp/NavigationBarResp';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <MediaQuery maxWidth={1070}>
          <NavigationBarResp />
        </MediaQuery>
        <MediaQuery minWidth={1070}>
          <NavigationBar />
        </MediaQuery>
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
