import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import MediaQuery from 'react-responsive';
import { useDispatch } from 'react-redux';
import { fetchAsynctrendtags } from '../../states/features/trendtag/trendtagSlice';
import McarouselTrend from './McarouselTrend/McarouselTrend';
import LcarouselTrend from './LcarouselTrend/LcarouselTrend';

/**
 * Component for render {@link LcarouselTrend} when show the Trend in Labtop or
 *  {@link McarouselTrend} when show in Mobile
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
  return (
    <>
      <MediaQuery maxWidth={800}>
        <McarouselTrend />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <LcarouselTrend />
      </MediaQuery>
    </>
  );
}
