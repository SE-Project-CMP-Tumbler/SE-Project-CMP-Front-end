import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Box from '@mui/material/Box';
import TrendCard from '../TrendCard/TrendCard';

export default function CarouselTrend() {
  return (
    window.innerWidth > 970 ? (
      <Box sx={{ width: 700 }}>
        <Carousel show={2} slide={1} transition={0.5} swiping>
          <div>
            <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="1" />
            <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="2" />
          </div>
          <div>
            <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="3" />
            <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="4" />
          </div>
          <div>
            <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="5" />
            <TrendCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="Sandwitch" color="blue" number="6" />
          </div>
        </Carousel>
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
