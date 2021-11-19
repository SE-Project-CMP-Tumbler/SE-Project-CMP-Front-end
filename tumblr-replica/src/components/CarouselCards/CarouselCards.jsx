import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FollowCard from '../FollowCard/FollowCard';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 4,
  },
  phone: {
    breakpoint: { max: 600, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
export default function CarouselCards() {
  return (
    <Carousel responsive={responsive}>
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="raghad" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="alaa" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="raghad" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="omar" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="pas" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="ro" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="dsfgdfgfgh" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="rag" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="tititi" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="sdfdfg" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="ertert" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="tttt" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="uutt" />
      <FollowCard image1="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" image2="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&" tag="oouu" />
    </Carousel>
  );
}
