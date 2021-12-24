import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import { getTrendtags } from '../../../states/features/trendtag/trendtagSlice';
import TrendCard from '../../TrendCard/TrendCard';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 715 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 715, min: 0 },
    items: 1,
  },
};
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
export default function LcarouselTrend() {
  const trendTags = useSelector(getTrendtags);
  console.log(trendTags);
  return (
    <Box sx={{ width: '100%' }}>
      { trendTags.meta.status === '200'
        ? (
          <Carousel responsive={responsive}>
            <div>
              <TrendCard image1={trendTags.response.tags[0].tag_image} tag={trendTags.response.tags[0].tag_description} color="rgb(58 73 54)" number="1" />
              <TrendCard image1={trendTags.response.tags[1].tag_image} tag={trendTags.response.tags[1].tag_description} color="rgb(64 54 40)" number="2" />
            </div>
          </Carousel>
        ) : <Box style={{ marginLeft: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>}
    </Box>
  );
}
