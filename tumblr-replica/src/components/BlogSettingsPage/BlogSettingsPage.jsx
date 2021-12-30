import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import SettingsSideMenu from '../AccountSettingsPage/subcomponents/SettingsSideMenu/SettingsSideMenu';
import { selectUser } from '../../states/User/UserSlice';
import {
  getBlogSettings, putBlogSettings, selectBlogInfo, selectBlogSettings, selectStatus,
  setShareLikes, setShareFollowings, setAllowMessages, setRepliesSettings, setAllowAsk,
  setAllowAnonymousQuestions, setAllowSubmittions, setAskPageTitle, setSubmissionPageTitle,
  putSubmissionGuidelines,
} from '../../states/blogsettingsslice/blogsettingsSlice';

const AccountSettingsPage = () => {
  const theme = createTheme();
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const blog = useSelector(selectBlogInfo);
  const blogSettings = useSelector(selectBlogSettings);
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    dispatch(getBlogSettings(params.blogname));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#001935', height: '100%' },
            a: { display: 'inline' },
          }}
        />
        <Box
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            margin: '40px auto 0',
            maxWidth: '990px',
            padding: '0 8px',
            width: '100%',
          }}
        >
          { status === '200' ? (
            <Box
              sx={{
                borderRadius: '3px',
                color: 'black',
                backgroundColor: '#FFFFFF',
                // alignItems: 'flex-end',
                display: 'flex',
                flexDirection: 'column',
                width: '625px',
              }}
            >
              <Link to={'/profile/' + blog.username}>
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    borderRadius: '3px',
                    maxHeight: '351.56px',
                  }}
                  src={blog.header_image}
                  alt="Primary blog Background"
                />
                <Box
                  component="img"
                  sx={{
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    color: '#FFFFFF',
                    backgroundImage: `url(${blog.avatar})`,
                    boxSizing: 'border-box',
                    backgroundPosition: 'center',
                    alignSelf: 'center',
                    height: '96px',
                    width: '96px',
                    zIndex: 10,
                    backgroundSize: 'cover',
                    marginLeft: '42%',
                    marginRight: '45%',
                    alignItems: 'center',
                    marginTop: '-72px',
                    position: 'relative',
                    boxShadow: '0 0 0 4px',
                  }}
                  src={blog.avatar}
                  alt="Primary blog Background"
                />
              </Link>
              <Box
                sx={{
                  textAlign: 'center',
                  padding: '0 50px 20px',
                }}
              >
                <Typography
                  component="h2"
                  fontSize="42px"
                  fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                  color="#000000"
                  fontWeight="bold"
                  sx={{
                    margin: '-5px 0 5px',
                    padding: '0 5px',
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  component="h2"
                  fontSize="14px"
                  fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                  color="#000000B3"
                  sx={{
                    margin: '-5px 0 5px',
                  }}
                >
                  {blog.description}
                </Typography>
              </Box>
              <Box
                component="form"
                sx={{
                  padding: '0 25px',
                  borderTop: '1px solid #DDD',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    // borderBottom: '1px solid rgba(0,0,0,.07)',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px 0',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="14px"
                    fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    color="#444444"
                    fontWeight="700"
                    sx={{
                      flex: '0 1 145px',
                      minWidth: '145px',
                      padding: '0 10px',
                    }}
                  >
                    Website Theme
                  </Typography>
                  <Box sx={{ margin: '0 10px' }}>
                    <Box sx={{ alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                      <Link to={'/customize/' + params.blogname}>
                        <Button
                          disableRipple
                          disableElevation
                          variant="contained"
                          size="large"
                          fontFamily="Helvetica Neue, Arial, Helvetica, sans-serif"
                          style={{
                            backgroundColor: '#9DA6AF',
                            color: '#FFFFFFF',
                            fontWeight: '700',
                            textTransform: 'none',
                            borderRadius: '3px',
                            fontSize: '13px',
                          }}
                          sx={{
                            padding: '0 10px',
                            margin: '0 10px 5px 0',
                          }}
                        >
                          Edit theme
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // borderBottom: '1px solid rgba(0,0,0,.07)',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px 0',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="14px"
                    fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    color="#444444"
                    fontWeight="700"
                    sx={{
                      flex: '0 1 145px',
                      minWidth: '145px',
                      padding: '0 10px',
                    }}
                  >
                    Likes
                  </Typography>
                  <Box sx={{ margin: '0 10px', color: '#000000' }}>
                    <Box sx={{ alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                      <FormControlLabel
                        control={(
                          <AntSwitch
                            checked={blogSettings.share_likes}
                            onChange={(e) => {
                              dispatch(setShareLikes(e.target.checked));
                              dispatch(putBlogSettings(blog.id));
                            }}
                            theme={theme}
                          />
                  )}
                        label="Share post you like"
                        style={{
                          fontWeight: 'normal',
                          color: '#444444',
                          margin: '0 0 5px',
                          fontSize: '14px',
                        }}
                      />
                    </Box>
                    <Typography
                      component="h2"
                      fontSize="12px"
                      fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                      color="#999999"
                      sx={{
                        flex: '0 1 145px',
                        minWidth: '145px',
                        padding: '0 10px',
                      }}
                    >
                      Make your likes public at:
                    </Typography>
                    <Link to={'/liked/by/' + user.blogName}>
                      <Typography
                        component="h2"
                        fontSize="12px"
                        fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                        color="#999999"
                        sx={{
                          textDecoration: 'underline',
                          flex: '0 1 145px',
                          minWidth: '145px',
                          padding: '0 10px',
                        }}
                      >
                        web.dev.tumbler.social/liked/by/
                        {user.blogName}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // borderBottom: '1px solid rgba(0,0,0,.07)',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px 0',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="14px"
                    fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    color="#444444"
                    fontWeight="700"
                    sx={{
                      flex: '0 1 145px',
                      minWidth: '145px',
                      padding: '0 10px',
                    }}
                  >
                    Following
                  </Typography>
                  <Box sx={{ margin: '0 10px', color: '#000000' }}>
                    <Box sx={{ alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                      <FormControlLabel
                        control={(
                          <AntSwitch
                            theme={theme}
                            checked={blogSettings.share_followings}
                            onChange={(e) => {
                              dispatch(setShareFollowings(e.target.checked));
                              dispatch(putBlogSettings(blog.id));
                            }}
                          />
)}
                        label="Share the Tumblrs you're following"
                        style={{
                          fontWeight: 'normal',
                          color: '#444444',
                          margin: '0 0 5px',
                          fontSize: '14px',
                        }}
                      />
                    </Box>
                    <Typography
                      component="h2"
                      fontSize="12px"
                      fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                      color="#999999"
                      sx={{
                        flex: '0 1 145px',
                        minWidth: '145px',
                        padding: '0 10px',
                      }}
                    >
                      Make your follows public at:
                    </Typography>
                    <Link to={'/followed/by/' + user.blogName}>
                      <Typography
                        component="h2"
                        fontSize="12px"
                        fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                        color="#999999"
                        sx={{
                          textDecoration: 'underline',
                          flex: '0 1 145px',
                          minWidth: '145px',
                          padding: '0 10px',
                        }}
                      >
                        web.dev.tumbler.social/followed/by/
                        {user.blogName}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // borderBottom: '1px solid rgba(0,0,0,.07)',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px 0',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="14px"
                    fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    color="#444444"
                    fontWeight="700"
                    sx={{
                      flex: '0 1 145px',
                      minWidth: '145px',
                      padding: '0 10px',
                    }}
                  >
                    Replies
                  </Typography>
                  <Box sx={{ margin: '0 10px', color: '#000000' }}>
                    <Box sx={{
                      alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row', fontSize: '12px',
                    }}
                    >
                      <Select
                        sx={{ maxWidth: '410px' }}
                        id="replies-select"
                        value={blogSettings.replies_settings}
                        onChange={(e) => {
                          dispatch(setRepliesSettings(e.target.value));
                          dispatch(putBlogSettings(blog.id));
                        }}
                        autoWidth
                      >
                        <MenuItem value="Everyone can reply">Everyone can reply</MenuItem>
                        <MenuItem value="Tumblrs you follow and Tumblrs following you for a week can reply">
                          Tumblrs you follow and Tumblrs following you for a week can reply
                        </MenuItem>
                        <MenuItem value="Only Tumblrs you follow can reply">Only Tumblrs you follow can reply</MenuItem>
                      </Select>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // borderBottom: '1px solid rgba(0,0,0,.07)',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px 0',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="14px"
                    fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    color="#444444"
                    fontWeight="700"
                    sx={{
                      flex: '0 1 145px',
                      minWidth: '145px',
                      padding: '0 10px',
                    }}
                  >
                    Ask
                  </Typography>
                  <Box sx={{ margin: '0 10px', color: '#000000' }}>
                    <Box sx={{ alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                      <FormControlLabel
                        control={(
                          <AntSwitch
                            theme={theme}
                            checked={blogSettings.ask_settings.allow_ask}
                            onChange={(e) => {
                              dispatch(setAllowAsk(e.target.checked));
                              dispatch(putBlogSettings(blog.id));
                            }}
                          />
                        )}
                        label="Let people ask questions"
                        style={{
                          fontWeight: 'normal',
                          color: '#444444',
                          margin: '0 0 5px',
                          fontSize: '14px',
                        }}
                      />
                    </Box>
                    <Typography
                      component="h2"
                      fontSize="12px"
                      fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                      color="#999999"
                      sx={{
                        flex: '0 1 145px',
                        minWidth: '145px',
                        padding: '0 10px',
                      }}
                    >
                      {'Send your audience to '}
                      <Link
                        to={'/profile/' + blog.id + '/ask'}
                        sx={{
                          textDecoration: 'underline',
                          fontSize: '12px',
                          color: '#999999',
                          fontFamily: '"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif',
                        }}
                      >
                        <Typography
                          fontSize="12px"
                          fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                          color="#999999"
                          sx={{
                            textDecoration: 'underline',
                            display: 'inline',
                          }}
                        >
                          /ask
                        </Typography>
                      </Link>
                      {' to ask you questions.'}
                    </Typography>
                    { blogSettings.ask_settings.allow_ask && (
                      <Box>
                        <Typography
                          component="h2"
                          fontSize="12px"
                          fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                          color="#999999"
                          sx={{
                            flex: '0 1 145px',
                            minWidth: '145px',
                            padding: '0 10px',
                            mt: '20px',
                          }}
                        >
                          Ask page title
                        </Typography>
                        <Box sx={{ marginBottom: '20px' }}>
                          <TextField
                            id="ask-page-title"
                            type="text"
                            placeholder=""
                            value={blogSettings.ask_settings.ask_page_title}
                            onChange={(e) => {
                              dispatch(setAskPageTitle(e.target.value));
                              clearTimeout(timer);
                              const newTimer = setTimeout(() => {
                                dispatch(putBlogSettings(blog.id));
                              }, 1000);
                              setTimer(newTimer);
                            }}
                            variant="outlined"
                            fullWidth
                            autoFocus
                            disableRipple
                            disableElevation
                            style={{
                              backgroundColor: '#FFFFFF', // '#E8F0FE',
                              borderRadius: 3,
                              fontSize: '13px',
                              border: 'none',
                            }}
                            inputProps={{
                              style: {
                                padding: '11px 13px',
                                // TO DO: Later remove the hover and focus effects
                              },
                            }}
                          />
                        </Box>
                        <FormControlLabel
                          control={(
                            <AntSwitch
                              theme={theme}
                              checked={blogSettings.ask_settings.allow_anonymous_questions}
                              onChange={(e) => {
                                dispatch(setAllowAnonymousQuestions(e.target.checked));
                                dispatch(putBlogSettings(blog.id));
                              }}
                            />
                        )}
                          label="Allow anonymous questions"
                          style={{
                            fontWeight: 'normal',
                            color: '#444444',
                            margin: '0 0 5px',
                            fontSize: '14px',
                          }}
                          sx={{
                            flex: '0 1 145px',
                            minWidth: '145px',
                            mt: '20px',
                          }}
                        />
                      </Box>
                    ) }

                  </Box>
                </Box>
                <Box
                  sx={{
                    // borderBottom: '1px solid rgba(0,0,0,.07)',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px 0',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="14px"
                    fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    color="#444444"
                    fontWeight="700"
                    sx={{
                      flex: '0 1 145px',
                      minWidth: '145px',
                      padding: '0 10px',
                    }}
                  >
                    Submissions
                  </Typography>
                  <Box sx={{ margin: '0 10px', color: '#000000' }}>
                    <Box sx={{ alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                      <FormControlLabel
                        control={(
                          <AntSwitch
                            theme={theme}
                            checked={blogSettings.submissions_settings.allow_submittions}
                            onChange={(e) => {
                              dispatch(setAllowSubmittions(e.target.checked));
                              dispatch(putBlogSettings(blog.id));
                            }}
                          />
                        )}
                        label="Let people submit posts"
                        style={{
                          fontWeight: 'normal',
                          color: '#444444',
                          margin: '0 0 5px',
                          fontSize: '14px',
                        }}
                      />
                    </Box>
                    <Typography
                      component="h2"
                      fontSize="12px"
                      fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                      color="#999999"
                      sx={{
                        flex: '0 1 145px',
                        minWidth: '145px',
                        padding: '0 10px',
                      }}
                    >
                      {'Send your audience to '}
                      <Link
                        to={'/profile/' + blog.id + '/submit'}
                        sx={{
                          textDecoration: 'underline',
                          fontSize: '12px',
                          color: '#999999',
                          fontFamily: '"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif',
                        }}
                      >
                        <Typography
                          fontSize="12px"
                          fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                          color="#999999"
                          sx={{
                            textDecoration: 'underline',
                            display: 'inline',
                          }}
                        >
                          /submit
                        </Typography>
                      </Link>
                      {' to submit posts into your submission queue for approval.'}
                    </Typography>
                    { blogSettings.submissions_settings.allow_submittions && (
                      <Box>
                        <Typography
                          component="h2"
                          fontSize="12px"
                          fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                          color="#999999"
                          sx={{
                            flex: '0 1 145px',
                            minWidth: '145px',
                            padding: '0 10px',
                            mt: '20px',
                          }}
                        >
                          Submissions page title
                        </Typography>
                        <Box sx={{ marginBottom: '20px' }}>
                          <TextField
                            id="submission-page-title"
                            type="text"
                            placeholder=""
                            value={blogSettings.submissions_settings.submissions_page_title}
                            onChange={(e) => {
                              dispatch(setSubmissionPageTitle(e.target.value));
                              clearTimeout(timer);
                              const newTimer = setTimeout(() => {
                                dispatch(putBlogSettings(blog.id));
                              }, 1000);
                              setTimer(newTimer);
                            }}
                            variant="outlined"
                            fullWidth
                            autoFocus
                            disableRipple
                            disableElevation
                            style={{
                              backgroundColor: '#FFFFFF', // '#E8F0FE',
                              borderRadius: 3,
                              fontSize: '13px',
                              border: 'none',
                            }}
                            inputProps={{
                              style: {
                                padding: '11px 13px',
                                // TO DO: Later remove the hover and focus effects
                              },
                            }}
                          />
                        </Box>
                        <Typography
                          component="h2"
                          fontSize="12px"
                          fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                          color="#999999"
                          sx={{
                            flex: '0 1 145px',
                            minWidth: '145px',
                            padding: '0 10px',
                            mt: '20px',
                          }}
                        >
                          Submissions guidelines
                        </Typography>
                        <Box sx={{ marginBottom: '20px' }}>
                          <TextField
                            id="submissions-guidelines"
                            type="text"
                            placeholder=""
                            multiline
                            maxRows={4}
                            value={blogSettings.submissions_settings.submissions_guidelines}
                            onChange={(e) => {
                              dispatch(putSubmissionGuidelines(e.target.value));
                              clearTimeout(timer);
                              const newTimer = setTimeout(() => {
                                dispatch(putBlogSettings(blog.id));
                              }, 1500);
                              setTimer(newTimer);
                            }}
                            variant="outlined"
                            fullWidth
                            autoFocus
                            disableRipple
                            disableElevation
                            style={{
                              backgroundColor: '#FFFFFF', // '#E8F0FE',
                              borderRadius: 3,
                              fontSize: '13px',
                              border: 'none',

                            }}
                            inputProps={{
                              style: {
                                padding: '11px 13px',
                                // TO DO: Later remove the hover and focus effects
                              },
                            }}
                          />
                        </Box>
                      </Box>
                    ) }
                  </Box>
                </Box>
                <Box
                  sx={{
                    // borderBottom: '1px solid rgba(0,0,0,.07)',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px 0',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize="14px"
                    fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    color="#444444"
                    fontWeight="700"
                    sx={{
                      flex: '0 1 145px',
                      minWidth: '145px',
                      padding: '0 10px',
                    }}
                  >
                    Messaging
                  </Typography>
                  <Box sx={{ margin: '0 10px', color: '#000000' }}>
                    <Box sx={{ alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                      <FormControlLabel
                        control={(
                          <AntSwitch
                            checked={blogSettings.allow_messages}
                            onChange={(e) => {
                              dispatch(setAllowMessages(e.target.checked));
                              dispatch(putBlogSettings(blog.id));
                            }}
                            theme={theme}
                          />
                  )}
                        label="Only allow messages from Tumblrs you follow"
                        style={{
                          fontWeight: 'normal',
                          color: '#444444',
                          margin: '0 0 5px',
                          fontSize: '14px',
                        }}
                      />
                    </Box>
                    <Typography
                      component="h2"
                      fontSize="12px"
                      fontFamily='"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                      color="#999999"
                      sx={{
                        flex: '0 1 145px',
                        minWidth: '145px',
                        padding: '0 10px',
                      }}
                    >
                      Tumblrs you don&apos;t follow won&apos;t be able
                      to start conversations with you.
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  { blog.is_primary ? (
                    <Box
                      sx={{
                        margin: '20px 10px 0 0',
                      }}
                    >
                      <Link
                        to="/account/delete"
                      >
                        <Button
                          disableRipple
                          disableElevation
                          variant="contained"
                          font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                          style={{
                            backgroundColor: '#FF4930', // '#FFFFFF',
                            fontWeight: '700',
                            textTransform: 'none',
                            // border: '1px solid rgba(0,0,0,.4)',
                            border: '1px solid #FF4930',
                            borderRadius: '2px',
                          }}
                        >
                          <Typography
                            component="h2"
                            fontSize="13px"
                            fontFamily='Favorit, "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    // color="#00000066"
                            color="#FFFFFF"
                          >
                            Delete account
                          </Typography>
                        </Button>
                      </Link>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        margin: '20px 10px 0 0',
                      }}
                    >
                      <Link
                        to={'/blog/' + blog.username + '/delete'}
                      >
                        <Button
                          disableRipple
                          disableElevation
                          variant="contained"
                          font="'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, sans-serif;"
                          style={{
                            backgroundColor: '#FF4930', // '#FFFFFF',
                            fontWeight: '700',
                            textTransform: 'none',
                            // border: '1px solid rgba(0,0,0,.4)',
                            border: '1px solid #FF4930',
                            borderRadius: '2px',
                          }}
                        >
                          <Typography
                            component="h2"
                            fontSize="13px"
                            fontFamily='Favorit, "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif'
                    // color="#00000066"
                            color="#FFFFFF"
                          >
                            Delete
                            {' '}
                            {blog.username}
                          </Typography>
                        </Button>
                      </Link>
                    </Box>
                  ) }
                </Box>
              </Box>
            </Box>
          ) : (<Box style={{ marginLeft: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>)}

          <SettingsSideMenu />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export default AccountSettingsPage;
