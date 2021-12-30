import { React, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBarResp from './components/NavigationBarResp/NavigationBarResp';
import LogOutHome from './components/LogOutHomePage/LogOutHomePage';
import LogInPage from './components/LogInPage/LogInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import RegisterWithGooglePage from './components/RegisterWithGooglePage/RegisterWithGooglePage';
import LinkAccountWithGooglePage from './components/LinkAccountWithGooglePage/LinkAccountWithGooglePage';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './components/ResetPasswordPage/ResetPasswordPage';
import DeleteAccountPage from './components/DeleteAccountPage/DeleteAccountPage';
import VerifyEmailPage from './components/VerifyEmailPage/VerifyEmailPage';
import AccountSettingsPage from './components/AccountSettingsPage/AccountSettingsPage';
import Explore from './components/Explore/Explore';
import Tagged from './components/Tagged/Tagged';
import Trending from './components/Trending/Trending';
import Newsfeed from './components/NewsFeed/Newsfeed';
import ChatBundle from './components/ChatBundle/ChatBundle';
import { initialCheck } from './states/User/UserSlice';
import { getBlogs, fetchBlogs } from './states/blogslice/blogsslice';
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
import StaffPicks from './components/StaffPicks/StaffPicks';
import RightBar from './components/DrawerRightBar/DrawerRightBar';
import Posts from './components/Profile/Posts';
import Likes from './components/Profile/Likes';
import Ask from './components/Profile/Ask';
import Submit from './components/Profile/Submit';
import AllMassages from './components/Messages/Allmessages';
import BlogMessages from './components/Messages/BlogMessages';
// import ProfileHeader from './components/ProfileTemp/ProfileTempHeader';
import ArtifactsPage from './components/ArtificatsPage/ArtificatsPage';
import NewTumblr from './components/NewTumblr/NewTumblr';
import Following from './components/Following/Following';
import Followers from './components/Followers/Followers';
import ChatListResp from './components/ChatListResp/ChatListResp';
// import ChatComponentResp from '../ChatComponentResp/ChatComponentResp';
// import { selectUser } from './states/user/UserSlice';
import NotFound from './components/NotFound/NoteFound';
import { selectHideNav } from './states/hidenav/hidenavSlice';
import {
  changeTheme, fonts, colors, backgrounds,
} from './components/NavigationBar/interactions';
import { selectTheme } from './states/theme/themeSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(initialCheck());
  useEffect(() => { dispatch(fetchBlogs()); }, []);
  const blogs = useSelector(getBlogs).response;
  const hideNav = useSelector(selectHideNav);
  const themeState = useSelector(selectTheme);
  const wrapperRef = useRef(null);
  useEffect(() => {
    changeTheme(fonts[themeState.theme],
      colors[themeState.theme], backgrounds[themeState.theme]);
  }, [themeState.theme]);

  return (
    <Router>
      <div className="App">
        { !hideNav.hideAll
        && (
        <>
          <MediaQuery minWidth={1070}>
            <NavigationBar />
          </MediaQuery>
          <MediaQuery maxWidth={1070}>
            <NavigationBarResp pageRef={wrapperRef} />
          </MediaQuery>
        </>
        )}

      </div>
      <div className="page-wrapper" ref={wrapperRef}>
        <Routes>
          <Route path="/" element={<LogOutHome />} />
          <Route exact path="/chat" element={<ChatBundle />} />
          <Route exact path="/messaging" element={<ChatListResp />} />
          {/* <Route exact path={`/messaging/new/${user.blogName}`}element={<ChatListResp />} /> */}
          <Route path="/following" element={<Following />} />
          <Route path="/followerspage" element={<Followers />} />
          <Route exact path="/dashboard" element={<Newsfeed />} />
          <Route exact path="/login" element={<LogInPage />} />
          <Route path="/onboarding" element={<RegisterWithGooglePage />} />
          <Route path="/linkAccount" element={<LinkAccountWithGooglePage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/forgot_password" element={<ForgotPasswordPage />} />
          <Route path="/reset_password/:id/:token" element={<ResetPasswordPage />} />
          <Route path="/settings/account" element={<AccountSettingsPage />} />
          <Route path="/account/delete" element={<DeleteAccountPage />} />
          <Route path="/verify/:id/:hash" element={<VerifyEmailPage />} />
          <Route path="/explore/recommended-for-you" element={<Explore />} />
          <Route path="/explore/trending" element={<Trending />} />
          <Route path="/explore/staff-picks" element={<StaffPicks />} />
          <Route path="/explore/text" element={<TextPosts />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/explore/photos" element={<ImagePosts />} />
          <Route path="/explore/quotes" element={<QuotePosts />} />
          <Route path="/explore/chats" element={<ChatPosts />} />
          <Route path="/explore/audio" element={<AudioPosts />} />
          <Route path="/explore/gifs" element={<GifPosts />} />
          <Route path="/explore/video" element={<VideoPosts />} />
          <Route path="/explore/asks" element={<AskPosts />} />
          <Route path="/tagged/:tag" element={<Tagged />} />
          <Route path="/blog/:blogname" element={<BlogPage />} />
          <Route path="/blog/:blogname/drafts" element={<Drafts />} />
          <Route path="/blog/view/:blogid" element={<RightBar />} />
          {/* <Route path="/profiletemp" element={<ProfileHeader BlogId={2} />} /> */}
          <Route path="/profile/:blogid" element={<Posts />} />
          <Route path="/profile/:blogid/likes" element={<Likes />} />
          <Route path="/profile/:blogid/ask" element={<Ask />} />
          <Route path="/profile/:blogid/submit" element={<Submit />} />
          <Route path="/inbox" element={<AllMassages />} />
          {/* eslint-disable */
          blogs && blogs.blogs && blogs.blogs?.map((blog) => ((blog.allow_ask || blog.allow_submittions) && <Route key={blog.id} path={'/blog/' + blog.username + '/messages'} element={<BlogMessages BlogId={blog.id} />} />))
        /* eslint-enable */}
          <Route path="/artifacts" element={<ArtifactsPage />} />
          <Route path="/new/blog" element={<NewTumblr />} />
          <Route path="/blog/:blogname/activity/new/:period/:rate" element={<Activity option="1" />} />
          <Route path="/blog/:blogname/activity/total/:period/:rate" element={<Activity option="1" />} />
          <Route path="/blog/:blogname/activity/notes/:period/:rate" element={<Activity option="1" />} />
          <Route path="/blog/:blogname/activity/:period/:rate" element={<Activity option="2" />} />
          <Route path="/blog/:blogname/activity/:period" element={<Activity option="3" />} />
          <Route path="/blog/:blogname/activity" element={<Activity option="4" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
