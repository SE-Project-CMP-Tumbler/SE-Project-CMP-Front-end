import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import '../Styles/checkout.css';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const CheckOut = function CheckOutTheseBlogs() {
  return (
    <div style={{ minWidth: 350, maxWidth: 350 }}>
      <Grid container justifyContent="start" alignItems="start">
        <Grid item xs={12}>
          <h1 className="header">Check out these blogs</h1>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none' }}>
            <CardHeader
              avatar={
                      (
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">R</Avatar>
                      )
                    }
              style={{ color: 'white' }}
              color="white"
              action={
                      (
                        <IconButton aria-label="settings">
                          <Typography style={{ fontSize: 14, float: 'right', color: 'white' }}> Follow</Typography>
                        </IconButton>
                      )
                     }
              title={
                     (
                       <Typography gutterBottom display="block" variant="caption"> Blog-username</Typography>
                     )
                    }
              subheader={
                         (
                           <Typography style={{ fontSize: 12 }}> Blog-title</Typography>
                         )
                        }
            />
          </Card>
        </Grid>
        <Grid item style={{ textAlign: 'left' }} xs={12}>
          <a className="I_SFh" href="/explore" style={{ color: 'white' }}>Explore all of Tumblr</a>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckOut;
