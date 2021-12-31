import { React, useEffect } from 'react';
import './css/CheckOut.css';
import { Divider, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Check from './subcomponents/Check';
import { selectUser } from '../../../../states/User/UserSlice';
import { getcheck } from '../../../../states/features/checkout/checkoutSlice';
import fetchCheckout from '../../../../states/features/checkout/checkoutAPI';

/**
 *
 * @returns component that includes some recommended blogs to follow.
 */
const CheckOut = function CheckOutTheseBlogs() {
  const CheckoutBlogs = useSelector(getcheck);
  const dispatch = useDispatch();
  const User = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchCheckout(User));
  }, []);
  return (
    <div className="container">
      <Grid container justifyContent="start" alignItems="start">
        <Grid item xs={0} sm={12}>
          <h1 className="header">Check out these blogs</h1>
        </Grid>
        <Divider />
        <div className="checkcontainer">
          <ul>
            {CheckoutBlogs?.blogs?.map((element) => (
              <Check blog={element} />
            ))}
          </ul>
        </div>
        <Grid item style={{ textAlign: 'left' }} xs={0} sm={12}>
          <a className="I_SFh" href="explore/recommended-for-you">
            Explore all of Tumblr
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckOut;
