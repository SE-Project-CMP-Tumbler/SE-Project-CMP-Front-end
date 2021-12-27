import './css/leftContainer.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { getBlogMessages } from '../../states/retriveblogmessagesslice/retriveblogmessagesslice';

function BlogLeftContainer() {
  const Posts = useSelector(getBlogMessages).response.posts;
  console.log(Posts);
  return (<div className="lContainerr"><h1>Blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto exercitationem. Minima, aperiam, vero commodi repellendus voluptatibus, officia vitae accusantium tenetur quidem odio corrupti porro voluptate. Neque eum non aspernatur?</h1></div>);
}

export default BlogLeftContainer;
