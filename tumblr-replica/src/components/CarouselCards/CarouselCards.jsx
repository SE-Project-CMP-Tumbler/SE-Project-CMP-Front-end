import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncrandomtags, getRandomtags } from '../../states/features/randomtag/randomtagSlice';
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
/**
 * Component for render  all {@link FollowCard} in Carousel

 * @component
 * @name
 * CarouselCards
 * @example
 * return (
 *   <CarouselCards  />
 * )
 */
export default function CarouselCards() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncrandomtags());
  }, []);
  const randomTags = useSelector(getRandomtags);
  return (
    <Carousel responsive={responsive}>
      { randomTags.meta.status === '200' ? (
        randomTags.response.tags
          .map((tag) => (
            <FollowCard
              image1={tag.tag_image1}
              image2={tag.tag_image2}
              tag={tag.tag_description}
            />
          )))
        : (<h2>Loading</h2>) }
    </Carousel>
  );
}
