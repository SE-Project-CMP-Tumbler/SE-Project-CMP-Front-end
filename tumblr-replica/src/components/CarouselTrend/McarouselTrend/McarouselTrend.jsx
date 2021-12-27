import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ReactLoading from 'react-loading';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getTrendtags } from '../../../states/features/trendtag/trendtagSlice';
import TrendCard from '../../TrendCard/TrendCard';

/**
 * Component for render eight of Trending tags each trend tag in {@link TrendCard}
 *
 * @component
 * @name
 * CarouselTrend
 * @example
 * return (
 *   <CarouselTrend />
 * )
 */
export default function McarouselTrend() {
  const [open, setOpen] = React.useState(false);
  const trendTags = useSelector(getTrendtags);
  const button = {
    backgroundColor: '#21374f',
  };
  return (
    <Box sx={{ width: '100%' }}>
      { trendTags.meta.status === '200'
        ? (
          <>
            <TrendCard image1={trendTags.response.tags[0].tag_image} tag={trendTags.response.tags[0].tag_description} color="rgb(58 73 54)" number="1" />
            <TrendCard image1={trendTags.response.tags[1].tag_image} tag={trendTags.response.tags[1].tag_description} color="rgb(64 54 40)" number="2" />
            <TrendCard image1={trendTags.response.tags[2].tag_image} tag={trendTags.response.tags[2].tag_description} color="rgb(64 37 52)" number="3" />
            <TrendCard image1={trendTags.response.tags[3].tag_image} tag={trendTags.response.tags[3].tag_description} color="rgb(64 44 92)" number="4" />
            {
            !open && (
            <Typography align="center">
              <Button
                variant="text"
                sx={{
                  textTransform: 'none', fontWeight: 'bold', width: '90%', fontSize: 'large',
                }}
                style={button}
                onClick={() => setOpen(true)}
              >
                Show More
              </Button>
            </Typography>
            )
            }
            { open
            && (
            <>
              <TrendCard image1={trendTags.response.tags[4].tag_image} tag={trendTags.response.tags[4].tag_description} color="rgb(31 42 104)" number="5" />
              <TrendCard image1={trendTags.response.tags[5].tag_image} tag={trendTags.response.tags[5].tag_description} color="rgb(0 71 53)" number="6" />
              <TrendCard image1={trendTags.response.tags[6].tag_image} tag={trendTags.response.tags[6].tag_description} color="rgb(58 73 54)" number="7" />
              <TrendCard image1={trendTags.response.tags[7].tag_image} tag={trendTags.response.tags[7].tag_description} color="rgb(64 54 40)" number="8" />
            </>
            )}
          </>
        ) : <Box style={{ marginLeft: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>}
    </Box>
  );
}
