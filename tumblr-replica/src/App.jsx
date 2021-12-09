import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RightBar from './components/DrawerRightBar';
// import { useDispatch } from 'react-redux';
// import { fetchBlog } from './states/slices/blogSlice';

function App() {
  // const dispatch = useDispatch();
  return (
    <Router>
      <div className="mainContainer">
        <RightBar />
      </div>
    </Router>
  );
}

export default App;
