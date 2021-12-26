import React from 'react';
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { fetchAsyncrandomtags, getRandomtags } from '../../states/features/randomtag/randomtagSlice';
import FollowCard from '../FollowCard/FollowCard';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktoplarge: {
    breakpoint: { max: 3000, min: 1000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1500, min: 900 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 900, min: 700 },
    items: 4,
  },
  phone: {
    breakpoint: { max: 700, min: 480 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
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
              image1={tag.tag_image}
              image2={tag.tag_image}
              tag={tag.tag_description}
              follow={tag.follow}
              key={tag.tag_description}
              randomcolor={tag.randomcolor}
            />
          )))
        : ((randomTags.error && <Alert style={{ marginTop: '15%' }} severity="error">This is an error in loading that component</Alert>)
          || (<Box style={{ marginLeft: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>))}
    </Carousel>
  );
}
