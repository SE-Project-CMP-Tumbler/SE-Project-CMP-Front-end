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
import TextPosts from './components/TextPosts/TextPosts';
import VideoPosts from './components/VideoPosts/VideoPosts';
import ImagePosts from './components/ImagePosts/ImagePosts';
import QuotePosts from './components/QuotePosts/QuotePosts';
import ChatPosts from './components/ChatPosts/ChatPosts';
import AudioPosts from './components/AudioPosts/AudioPosts';
import GifPosts from './components/GifPosts/GifPosts';
import AskPosts from './components/AskPosts/Askposts';
import BlogPage from './components/BlogPage/BlogPage';
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
        <Route path="/explore/staff-picks" element={<Explore />} />
        <Route path="/explore/text" element={<TextPosts />} />
        <Route path="/explore/photos" element={<ImagePosts />} />
        <Route path="/explore/quotes" element={<QuotePosts />} />
        <Route path="/explore/chats" element={<ChatPosts />} />
        <Route path="/explore/audio" element={<AudioPosts />} />
        <Route path="/explore/gifs" element={<GifPosts />} />
        <Route path="/explore/video" element={<VideoPosts />} />
        <Route path="/explore/asks" element={<AskPosts />} />
        <Route path="/tagged/:tag" element={<Tagged />} />
        <Route path="/blog/:blogname" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
