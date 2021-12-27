import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import './SideTabs.css';
import { selectUser } from '../../states/User/UserSlice';

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
  const User = useSelector(selectUser);
  const blogusername = 'ragjadkhaled';
  const title = 'ragh';
  const item = { height: '50px' };
  const item2 = { height: '50px', backgroundColor: 'rgba(255,255,255,.1)' };
  return (
    <Box className="font" minWidth={240}>
      <h4>{blogusername}</h4>
      <h4>{title}</h4>
      <Link to={`/blog/${User.blogName}`} className="link">
        <ListItem style={select === 1 ? item2 : item} button>
          <Grid item xs={11}>
            Posts
          </Grid>
          <Grid item xs={1}>
            4
          </Grid>
        </ListItem>
      </Link>
      <Link to={`/blog/${User.blogName}/followers`} className="link">
        <ListItem style={select === 2 ? item2 : item} button>
          <Grid item xs={11}>
            Followers
          </Grid>
          <Grid item xs={1}>
            4
          </Grid>
        </ListItem>
      </Link>
      <Link to={`/blog/${User.blogName}/activity`} className="link">
        <ListItem style={select === 3 ? item2 : item} button>
          Activity
        </ListItem>
      </Link>
      <Link to={`/blog/${User.blogName}/drafts`} className="link">
        <ListItem style={select === 4 ? item2 : item} button>
          <Grid item xs={11}>
            Drafts
          </Grid>
          <Grid item xs={1}>
            4
          </Grid>
        </ListItem>
      </Link>
      <Link to={`/setting/blog/${blogusername}`} className="link">
        <ListItem style={select === 5 ? item2 : item} button>
          <Grid item xs={11}>
            Edit Appearance
          </Grid>
          <Grid item xs={1}>
            <img alt="arrow" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/20/ffffff/external-right-arrow-arrow-flatart-icons-solid-flatarticons-9.png" />
          </Grid>
        </ListItem>
      </Link>
    </Box>
  );
}
SideTabs.propTypes = {
  select: PropTypes.number.isRequired,
};
export default SideTabs;
