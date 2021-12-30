import React from 'react';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import './SideTabs.css';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogactivity, fetchAsyncblogactivity } from '../../states/features/blogactivity/blogacttivitySlice';
import { getBloginfo, fetchAsyncbloginfo } from '../../states/features/bloginfo/bloginfoSlice';
import { getBlogId, fetchBlogs, setcurrentblog } from '../../states/features/userblogs/userblogsSlice';

// need to edit and take blogusername, title from store
/**
 * Side Tab in blog Page to show number of Posts, followes, drafts for the Blog
 *
 *
 * @component
 * @name
 * SideTabs
 * @example
 * return (
 *   <SideTabs select={2} />
 * )
 */
function SideTabs({ select }) {
  // const blogid = 14;
  const item = { height: '60px', fontSize: 20 };
  const item2 = { height: '60px', backgroundColor: 'rgba(255,255,255,.1)', fontSize: 20 };
  const blogname = window.location.href.split('/')[4];
  const blogid = useSelector(getBlogId);
  console.log(blogid, 'BBLOgIDDDDDDDDDDDDDDDDDDDDD');
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setcurrentblog(blogname));
    dispatch(fetchBlogs());
    dispatch(fetchAsyncblogactivity(blogid));
    dispatch(fetchAsyncbloginfo(blogid));
  }, []);

  React.useEffect(() => {
    dispatch(fetchAsyncblogactivity(blogid));
    dispatch(fetchAsyncbloginfo(blogid));
  }, [blogid]);
  const Activity = useSelector(getBlogactivity);
  const Bloginfo = useSelector(getBloginfo);
  return (
    <Box className="font" minWidth={240}>
      {Activity.meta.status === '200' && Bloginfo.meta.status === '200'
        ? (
          <>
            <h3 className="h3">{Bloginfo.response.username}</h3>
            <h3 className="h31">{Bloginfo.response.title}</h3>
            <Link to={`/blog/${Bloginfo.response.username}`} className="link">
              <ListItem style={select === 1 ? item2 : item} button>
                <Grid item xs={11}>
                  Posts
                </Grid>
                <Grid item xs={1}>
                  {Activity.response.posts}
                </Grid>
              </ListItem>
            </Link>
            <Link to={`/blog/${Bloginfo.response.username}/followers`} className="link">
              <ListItem style={select === 2 ? item2 : item} button>
                <Grid item xs={11}>
                  Followers
                </Grid>
                <Grid item xs={1}>
                  {Activity.response.followers}
                </Grid>
              </ListItem>
            </Link>
            <Link to={`/blog/${Bloginfo.response.username}/activity`} className="link">
              <ListItem style={select === 3 ? item2 : item} button>
                Activity
              </ListItem>
            </Link>
            <Link to={`/blog/${Bloginfo.response.username}/drafts`} className="link">
              <ListItem style={select === 4 ? item2 : item} button>
                <Grid item xs={11}>
                  Drafts
                </Grid>
                <Grid item xs={1}>
                  {Activity.response.drafts}
                </Grid>
              </ListItem>
            </Link>
            <Link to={`/setting/blog/${Bloginfo.response.username}`} className="link">
              <ListItem style={select === 5 ? item2 : item} button>
                <Grid item xs={11}>
                  Edit Appearance
                </Grid>
                <Grid item xs={1}>
                  <img alt="arrow" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/20/ffffff/external-right-arrow-arrow-flatart-icons-solid-flatarticons-9.png" />
                </Grid>
              </ListItem>
            </Link>
          </>
        ) : (((Bloginfo.error && Activity.error && blogid === 0) && (
          <Alert style={{ marginTop: '15%' }} severity="error">
            Component could not be loaded.
            This could be due to trouble fetching data from the backend server.
            Try switching to the mock server to see if the error persists.
          </Alert>
        ))
          || (Bloginfo.meta.msg === 'Loading' && <Box style={{ marginRight: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>)
        )}
    </Box>
  );
}
SideTabs.propTypes = {
  select: PropTypes.number.isRequired,
};
export default SideTabs;
