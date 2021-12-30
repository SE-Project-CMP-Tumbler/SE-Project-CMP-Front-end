import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideTabs from '../SideTabs/SideTabs';
import Graph from '../Graph/Graph';
import {
  getNotes, fetchAsyncgraphnotes,
  fetchAsyncgraphnewfollowers,
  fetchAsyncgraphtotalfollowers,
  getNewfollowers,
  getTotalfollowers,
} from '../../states/features/graph/graphSlice';
import NotificationsList from './NotificationsList';
import { getBlogId, fetchBlogs, setcurrentblog } from '../../states/features/userblogs/userblogsSlice';
// import Graph2 from '../Graph/Graph2';

/**
 * Component for show the activity for the Blog it has graph
 *
 * @component
 * @name
 * Activity
 * @example
 * return (
 *   <Activity />
 * )
 */
function Activity({ option }) {
  const URL1 = window.location.href.split('/');
  const conrate = useParams().rate;
  const conperiod = useParams().period;
  console.log(option);
  const last = URL1.pop();
  let optionval = '';
  let periodval = '';
  let rateval = '';
  if (option === '4') {
    optionval = 'notes';
    periodval = 'month';
    rateval = 'daily';
  }
  if (option === '1') {
    optionval = (URL1[6] === 'total' || URL1[6] === 'new') ? URL1[6] : 'notes';
    periodval = (URL1[7] === 'day' || URL1[7] === 'threedays' || URL1[7] === 'week' || URL1[7] === 'month') ? URL1[7] : 'month';
    rateval = (last === 'hourly' || last === 'daily') ? last : 'daily';
  }
  if (option === '3') {
    optionval = (last === 'total' || last === 'new') ? last : 'notes';
    periodval = (last === 'day' || last === 'threedays' || last === 'week' || last === 'month') ? last : 'month';
    rateval = (last === 'hourly' || last === 'daily') ? last : 'daily';
  }
  if (option === '2') {
    optionval = (URL1[6] === 'total' || URL1[6] === 'new') ? URL1[6] : 'notes';
    periodval = (last === 'day' || last === 'threedays' || last === 'week' || last === 'month') ? last : 'threedays';
    periodval = (periodval !== last) && (URL1[6] === 'day' || URL1[6] === 'threedays' || URL1[6] === 'week' || URL1[6] === 'month') ? URL1[6] : 'month';
    rateval = (last === 'hourly' || last === 'daily') ? last : 'hourly';
  }
  console.log(optionval, periodval, rateval);
  let period = 30;
  switch (periodval) {
    case 'day':
      period = 1;
      break;
    case 'threedays':
      period = 3;
      break;
    case 'week':
      period = 7;
      break;
    default:
      period = 30;
  }
  let rate = 1;
  switch (rateval) {
    case 'hourly':
      rate = 0;
      break;
    default:
      rate = 1;
  }
  console.log(period, rate);
  const dispatch = useDispatch();
  const BlogId = useSelector(getBlogId);
  React.useEffect(() => {
    dispatch(setcurrentblog(URL1[4]));
    dispatch(fetchBlogs());
  }, []);
  React.useEffect(() => {
    console.log(BlogId, 'Activityyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
    if (optionval === 'notes') {
      dispatch(fetchAsyncgraphnotes({ period, rate, BlogId }));
    } else if (optionval === 'new') {
      dispatch(fetchAsyncgraphnewfollowers({ period, rate, BlogId }));
    } else {
      dispatch(fetchAsyncgraphtotalfollowers({ period, rate, BlogId }));
    }
  }, [conrate, conperiod, optionval, BlogId]);
  let Notes = {};
  if (optionval === 'notes') {
    Notes = useSelector(getNotes);
  } else if (optionval === 'new') {
    Notes = useSelector(getNewfollowers);
  } else {
    Notes = useSelector(getTotalfollowers);
  }
  console.log(Notes);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <Graph
            Notes={Notes}
            periodval={periodval}
            rateval={rateval}
            optionval={optionval}
          />
          <NotificationsList />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <SideTabs select={3} />
        </Grid>
      </Grid>
    </div>
  );
}
Activity.propTypes = {
  option: PropTypes.string.isRequired,
};

export default Activity;
