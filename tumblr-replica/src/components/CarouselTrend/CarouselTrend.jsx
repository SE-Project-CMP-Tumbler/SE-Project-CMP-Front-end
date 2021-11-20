import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsynctrendtags, getTrendtags } from '../../states/features/trendtag/trendtagSlice';
import TrendCard from '../TrendCard/TrendCard';

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
export default function CarouselTrend() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsynctrendtags());
  }, []);
  const trendTags = useSelector(getTrendtags);
  return (
    window.innerWidth > 970 ? (
      <Box sx={{ width: 650 }}>
        { trendTags.meta.status === '200'
          ? (
            <Carousel responsive={responsive}>
              <div>
                <TrendCard image1={trendTags.response.tags[0].tag_image} tag={trendTags.response.tags[0].tag_description} color="rgb(58 73 54)" number="1" />
                <TrendCard image1={trendTags.response.tags[1].tag_image} tag={trendTags.response.tags[1].tag_description} color="rgb(64 54 40)" number="2" />
              </div>
              <div>
                <TrendCard image1={trendTags.response.tags[2].tag_image} tag={trendTags.response.tags[2].tag_description} color="rgb(64 37 52)" number="3" />
                <TrendCard image1={trendTags.response.tags[3].tag_image} tag={trendTags.response.tags[3].tag_description} color="rgb(64 44 92)" number="4" />
              </div>
              <div>
                <TrendCard image1={trendTags.response.tags[4].tag_image} tag={trendTags.response.tags[4].tag_description} color="rgb(31 42 104)" number="5" />
                <TrendCard image1={trendTags.response.tags[5].tag_image} tag={trendTags.response.tags[5].tag_description} color="rgb(0 71 53)" number="6" />
              </div>
              <div>
                <TrendCard image1={trendTags.response.tags[6].tag_image} tag={trendTags.response.tags[6].tag_description} color="rgb(58 73 54)" number="7" />
                <TrendCard image1={trendTags.response.tags[7].tag_image} tag={trendTags.response.tags[7].tag_description} color="rgb(64 54 40)" number="8" />
              </div>
            </Carousel>
          ) : <h3>Loading</h3>}
      </Box>
    ) : (
      <div>
        <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="1" />
        <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="2" />
        <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="3" />
        <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="4" />
        <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="5" />
        <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="6" />
      </div>
    )
  );
}
