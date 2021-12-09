import React from 'react';
import Grid from '@mui/material/Grid';
import SideTabs from '../SideTabs/SideTabs';

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
function Activity() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} lg={6} sx={{ marginLeft: '10%' }}>
          Graph
        </Grid>
        <Grid item lg={4} sx={{ marginLeft: '2%', display: { xs: 'none', lg: 'block' } }}>
          <SideTabs select={3} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Activity;
