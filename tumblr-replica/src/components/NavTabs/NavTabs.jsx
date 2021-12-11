import * as React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import MnavTabs from './MnavTabs/MnavTabs';
import LnavTabs from './LnavTabs/LnavTabs';

/**
 * Component for The navTabs which show in the top os explor section.
 *
 * @component
 * @name
 * NavTabs
 * @example
 * const tapnum = 1
 * const selected = 'More'
 * return (
 *   <NavTabs tapnum={tapnum} selected={selected} />
 * )
 */
export default function NavTabs({ tapnum, selsected }) {
  return (
    <>
      <MediaQuery maxWidth={800}>
        <MnavTabs tapnum={tapnum} selsected={selsected} />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <LnavTabs tapnum={tapnum} selsected={selsected} />
      </MediaQuery>
    </>
  );
}

NavTabs.propTypes = {
  /**
   * @param {tapnum}
   * tapnum the tab should have blue underline
   */
  tapnum: PropTypes.number.isRequired,
  /**
   * @param {selsected}
   * selected is the type of post selected to show ex: Gif,Photo..More
  */
  selsected: PropTypes.string.isRequired,
};
