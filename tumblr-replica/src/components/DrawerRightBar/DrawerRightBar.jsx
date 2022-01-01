import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './DrawerHeader';
import './css/DrawerRightBar.css';
import { getBlogId, fetchBlogId } from '../../states/blognameslice/blogNameSlice';

const useStyles = makeStyles({
  drawerpaper: {
    width: 730,
    background: '#061833!important',
  },

});

/**
 * Component RightBar is called in App.jsx to open the drawer
 *
 * @component
 * @example
 *<Drawer>
 * <Header CloseCliked={CloseCliked} OpenChatClicked={() => {setOpenChat(true);}} BlogId={blogid} />
 *</Drawer>
 *  return (
 *   <RightBar />
 * )
 */

function RightBar() {
  const { username } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlogId(username));// will take BlogId
  }, []);
  const navigate = useNavigate();
  const [Open, setOpening] = useState(true);
  const [OpenChat, setOpenChat] = useState(false);
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const blogid = useSelector(getBlogId).response.id;
  const statue = useSelector(getBlogId).meta;
  const Error = useSelector(getBlogId).error;

  /**
 * closing the drawer and navigate(-1)
 * @param   {function} handelCloseDrawer  function for closing the drawer and return one page back
 */
  function handelCloseDrawer() {
    setOpening(false);
    setOpenChat(false);
    navigate(-1);
  }

  // function OpenTheChat() {
  //   setOpenChat(true);
  // }

  // function handelCloseChat() {
  //   setOpenChat(false);
  // }
  const classes = useStyles();
  return (
    <div>
      {/* <button type="button" onClick={OpenTheChat}> Open chat</button> */}
      <div className="drawer">

        <Drawer
          className="drawer"
          variant="temporary"
          anchor="right"
          classes={{ paper: classes.drawerpaper }}
          open={Open}
          ModalProps={{ onBackdropClick: handelCloseDrawer }}
        >
          {statue.status === '200' ? (
            <>
              <div>
                <Header
                  CloseClicked={() => setOpening(false)}
                  OpenChatClicked={() => {
                    setOpenChat(true);
                  }}
                  BlogId={blogid}
                />
              </div>
              {/* this part for  integrating chat module */}
              {!IsTabletOrMobile && OpenChat && (
                <div className="chat">
                  <p>the chat will integrated here</p>
                </div>
              )}
            </>
          ) : (
            Error && <div>This Tumblr is cool, but empty.</div>)}
        </Drawer>

      </div>

    </div>
  );
}

export default RightBar;
