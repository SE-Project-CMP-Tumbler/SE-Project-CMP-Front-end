import { React, useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import Check from '../NewsFeed/subcomponents/CheckOut/subcomponents/Check';
import { selectUser } from '../../states/User/UserSlice';
import { getcheck } from '../../states/features/checkout/checkoutSlice';
import fetchCheckout from '../../states/features/checkout/checkoutAPI';

/**
 *
 * @component
 * @returns component that includes some recommended blogs to follow.
 * @name
 * CheckOut
 * @example
 * return (
 *   <CheckOut />
 * )
 */
const CheckOut = function CheckOutTheseBlogs() {
  const CheckoutBlogs = useSelector(getcheck);
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);
  const User = useSelector(selectUser);
  useEffect(() => {
    console.log(CheckoutBlogs);
    dispatch(fetchCheckout(User));
  }, []);
  const maxlen = CheckoutBlogs.blogs.length;
  const handleStart = () => {
    setStart(((start + 4) % maxlen));
  };
  return (

    <Box sx={{ width: '100%', maxWidth: 320, marginTop: 6 }} style={{ backgroundColor: '#122943' }}>
      <nav aria-label="main mailbox folders">
        <List sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText
              primary="Check out these blogs"
              sx={{ p: 1 }}
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: 'bolder',
                letterSpacing: 0,
                color: 'rgb(255,255,255)',
              }}
            />
          </ListItem>
          <Divider style={{ m: 2 }} />
          {CheckoutBlogs?.blogs?.slice(start, start + 4).map((element) => (
            <Check blog={element} />
          ))}
          <Divider />
          <ListItem disablePadding sx={{ justifyContent: 'center' }}>
            <Button variant="text" onClick={handleStart} sx={{ textTransform: 'none', fontWeight: 'bold' }}>
              Show more Blogs
            </Button>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default CheckOut;
