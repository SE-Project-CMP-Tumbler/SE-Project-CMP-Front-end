import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
/**
 * Component for render the image and name for trending tag
 * that use in {@link CarouselTrend}
 *
 * @component
 * @name
 * TrendCard
 * @example
 * return (
 *   <TrendCard />
 * )
 */
export default function TrendCard({
  image1, tag, color, number,
}) {
  const white = {
    color: 'white',
    fontWeight: 'bolder',
    fontSize: 'large',
  };
  const opwhite = {
    color: 'white',
    fontWeight: 500,
    fontSize: 'medium',
    opacity: 0.7,
  };
  const linkst = { width: '90%', textDecoration: 'none' };
  return (
    <Box
      sx={{
        '& > :not(style)': {
          width: '85%',
          height: 80,
          marginTop: '15px',
          p: 1,
        },
      }}
    >
      <Paper style={{ backgroundColor: color }} elevation={3}>
        <Link to={`/tagged/${tag}`} style={linkst}>
          <Grid container>
            <Grid
              item
              xs={1}
              sx={{
                borderRadius: '50%', width: 25, height: 25, mr: 1, textAlign: 'center', bgcolor: 'secondary.main',
              }}
            >
              {number}
            </Grid>
            <Grid item xs={6} style={white} sx={{ fontFamily: 'default' }}>
              {
              tag
              }
              <div style={opwhite}>
                #endregion #ted
              </div>
            </Grid>
            <Grid item xs={4}>
              <ImageList sx={{
                borderRadius: 1, mt: 0.5, overflowY: 'clip',
              }}
              >
                <ImageListItem>
                  <img
                    src={image1}
                    alt="Cardimage"
                    style={{ width: '120px', height: '70px' }}
                  />
                </ImageListItem>
              </ImageList>
            </Grid>
          </Grid>
        </Link>
      </Paper>
    </Box>
  );
}

TrendCard.propTypes = {
  image1: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
