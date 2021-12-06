import React from 'react';
import TagCard from '../TagCard/TagCard';
/**
 * Component for render all elements in tagged/:tag_description
 * now it has {@link TagCard}.
 *
 * @component
 * @name
 * Tagged
 * @example
 * return (
 *   <Tagged />
 * )
 */
function Tagged() {
  return (
    <div>
      <h1>Tagged</h1>
      <TagCard />
    </div>
  );
}

export default Tagged;
