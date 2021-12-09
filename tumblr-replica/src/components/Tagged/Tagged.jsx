import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import TagCard from '../TagCard/TagCard';
import PostsList from '../PostsList/PostsList';
import RecentAndTop from '../RecentAndTop/RecentAndTop';
import { getTagposts, fetchAsynctagposts } from '../../states/features/tagposts/tagpostsSlice';
/**
 * Component for render all elements in tagged/:tag_description
 * now it has {@link TagCard}.
 *
 * @component
 * @name
 * Tagged
 * @example
 * return (
 *   <Tagged />
 * )
 */
function Tagged() {
  const [value, setValue] = React.useState(0);
  const TagDescription = window.location.href.split('/').pop().split('?')[0];
  const dispatch = useDispatch();
  React.useEffect(() => {
    const SortType = value === 0 ? 'recent' : 'top';
    dispatch(fetchAsynctagposts({ TagDescription, SortType }));
  }, [value]);
  const Posts = useSelector(getTagposts);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          <RecentAndTop value={value} setValue={setValue} />
          <PostsList Posts={Posts} />
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <TagCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Tagged;
