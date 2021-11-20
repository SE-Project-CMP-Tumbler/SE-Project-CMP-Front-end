import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Newsfeed from './Components/Newsfeed';

function App() {
  return (
    <Router>
      <Newsfeed />
    </Router>
  );
}

export default App;
