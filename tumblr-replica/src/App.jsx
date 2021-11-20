import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBarResp from './components/NavigationBarResp/NavigationBarResp';
import LogOutHome from './components/LogOutHomePage/LogOutHomePage';
import LogInPage from './components/LogInPage/LogInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage';
import Explore from './components/Explore/Explore';
import Tagged from './components/Tagged/Tagged';
import Trending from './components/Trending/Trending';
import Newsfeed from './components/NewsFeed/Newsfeed';
import HomePage from './components/HomePage/HomePage';
// import SignUpInputAgePage from './components/SignUpInputAgePage/SignUpInputAgePage';
// import { selectUser } from './states/user/UserSlice';

/* need to import more element when finished */
function App() {
  // const user = useSelector(selectUser);
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
      <Routes>
        <Route exact path="/chat" element={<HomePage />} />
        <Route exact path="/dashboard" element={<Newsfeed />} />
        <Route exact path="/login" element={<LogInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/forgot_password" element={<ForgotPasswordPage />} />
        <Route path="/logout" element={<LogOutHome />} />
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
  );
}

export default App;
