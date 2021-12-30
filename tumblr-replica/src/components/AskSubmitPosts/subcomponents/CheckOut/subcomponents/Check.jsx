import React from 'react';
import PropTypes from 'prop-types';
import '../css/CheckOut.css';
import { useSelector, useDispatch } from 'react-redux';
import { getcheck, setChecks } from '../../../../../states/features/checkout/checkoutSlice';

/**
 *
 * @returns component that includes some recommended blogs to follow.
 */
const Check = function CheckOut(props) {
  const { blog } = props;
  const CheckoutBlogs = useSelector(getcheck);
  const dispatch = useDispatch();
  const handleFollow = function follow() {
    console.log(CheckoutBlogs.blogs.filter((ch) => ch.id !== blog.id));
  };
  const handleRemove = function Remove() {
    dispatch(setChecks(CheckoutBlogs.blogs.filter((ch) => ch.id !== blog.id)));
  };
  return (
    <li className="check">
      <div className="onecontainer">
        <div className="conainer2">
          <div className="blog">
            <span className="blogspan">
              <a className="blogname" href={`/blog/view/${blog.id}`}>
                <div className="blogdata">
                  <div className="blogimg">
                    <img src={blog.avatar} alt="img" />
                  </div>
                  <div className="blogtitles">
                    <div className="b1">
                      {blog.username}
                    </div>
                    <div className="b2">
                      {blog.title}
                    </div>
                  </div>
                </div>
              </a>
            </span>
            <div className="followdiv">
              <button className="fb" type="button" onClick={() => handleFollow()}>
                <span className="f">
                  Follow
                </span>
              </button>
            </div>
          </div>
          <button aria-label="settings" type="button" className="checkbutton" onClick={() => handleRemove()}>
            <svg width="10" height="10" viewBox="0 0 14 14" className="xsvg">
              <path d="M14 2.8L11.2 0 7 4.2 2.8 0 0 2.8 4.2 7 0 11.2 2.8 14 7 9.8l4.2 4.2 2.8-2.8L9.8 7 14 2.8z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Check;
Check.propTypes = {
  blog: PropTypes.instanceOf(Object).isRequired,
};
