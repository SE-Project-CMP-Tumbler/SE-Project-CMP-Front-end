import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBarResp from './components/NavigationBarResp/NavigationBarResp';
import LogOutHome from './components/LogOutHomePage/LogOutHomePage';
import LogInPage from './components/LogInPage/LogInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import RegisterWithGooglePage from './components/RegisterWithGooglePage/RegisterWithGooglePage';
import LinkAccountWithGooglePage from './components/LinkAccountWithGooglePage/LinkAccountWithGooglePage';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage';
import Explore from './components/Explore/Explore';
import Tagged from './components/Tagged/Tagged';
import Trending from './components/Trending/Trending';
import Newsfeed from './components/NewsFeed/Newsfeed';
import HomePage from './components/HomePage/HomePage';
import { initialCheck } from './states/User/UserSlice';
import TextPosts from './components/TextPosts/TextPosts';
import VideoPosts from './components/VideoPosts/VideoPosts';
import ImagePosts from './components/ImagePosts/ImagePosts';
import QuotePosts from './components/QuotePosts/QuotePosts';
import ChatPosts from './components/ChatPosts/ChatPosts';
import AudioPosts from './components/AudioPosts/AudioPosts';
import GifPosts from './components/GifPosts/GifPosts';
import AskPosts from './components/AskPosts/Askposts';
import BlogPage from './components/BlogPage/BlogPage';
import Activity from './components/Activity/Activity';
import Drafts from './components/Drafts/Drafts';
import RightBar from './components/DrawerRightBar/DrawerRightBar';
import ArtifactsPage from './components/ArtificatsPage/ArtificatsPage';
// import SignUpInputAgePage from './components/SignUpInputAgePage/SignUpInputAgePage';
// import { selectUser } from './states/user/UserSlice';

function App() {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  dispatch(initialCheck());
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
        <Route path="/onboarding" element={<RegisterWithGooglePage />} />
        <Route path="/linkAccount" element={<LinkAccountWithGooglePage />} />
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
        <Route path="/blog/:blogname/activity" element={<Activity />} />
        <Route path="/blog/:blogname/drafts" element={<Drafts />} />
        <Route path="/rightbar" element={<RightBar />} />
        <Route path="/artificats" element={<ArtifactsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
