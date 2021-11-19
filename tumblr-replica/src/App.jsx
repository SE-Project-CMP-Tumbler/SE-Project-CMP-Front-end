import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './components/Explore/Explore';
import Tagged from './components/Tagged/Tagged';
import Trending from './components/Trending/Trending';

/* need to import more element when finished */
function App() {
  return (
    <div>
      <Router>
        <h1>Tumblr</h1>
        <Routes>
          <Route path="/explore/recommended-for-you" element={<Explore />} />
          <Route path="/explore/trending" element={<Trending />} />
          <Route path="/explore/staff-picks" />
          <Route path="/explore/text" />
          <Route path="/explore/photos" />
          <Route path="/explore/quotes" />
          <Route path="/explore/chats" />
          <Route path="/explore/Audio" />
          <Route path="/explore/Video" />
          <Route path="/explore/Asks" />
          <Route path="/tagged/:tag" element={<Tagged />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
