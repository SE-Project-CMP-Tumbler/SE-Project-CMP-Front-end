import React from 'react';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import './SideTabs.css';

function SideTabs({ select, blogusername, title }) {
  const item = { height: '50px' };
  const item2 = { height: '50px', backgroundColor: 'rgba(255,255,255,.1)' };
  return (
    <Box className="font" minWidth={240}>
      <h4>{blogusername}</h4>
      <h4>{title}</h4>
      <ListItem style={select === 1 ? item2 : item} button>
        <Grid item xs={11}>
          Posts
        </Grid>
        <Grid item xs={1}>
          4
        </Grid>
      </ListItem>
      <ListItem style={select === 2 ? item2 : item} button>
        <Grid item xs={11}>
          Followers
        </Grid>
        <Grid item xs={1}>
          4
        </Grid>
      </ListItem>
      <ListItem style={select === 3 ? item2 : item} button>
        Activity
      </ListItem>
      <ListItem style={select === 4 ? item2 : item} button>
        <Grid item xs={11}>
          Drafts
        </Grid>
        <Grid item xs={1}>
          4
        </Grid>
      </ListItem>
      <ListItem style={select === 5 ? item2 : item} button>
        <Grid item xs={11}>
          Edit Appearance
        </Grid>
        <Grid item xs={1}>
          <img alt="arrow" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/20/ffffff/external-right-arrow-arrow-flatart-icons-solid-flatarticons-9.png" />
        </Grid>
      </ListItem>
    </Box>
  );
}
SideTabs.propTypes = {
  select: PropTypes.number.isRequired,
  blogusername: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};
export default SideTabs;
